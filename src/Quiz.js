import React, { Component } from 'react'

import './Quiz.css'
import questionSet from './questions'
import { Redirect } from 'react-router-dom'

export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            qSet: [],
            currnetQuestion: 0,
            selectedOption: '',
            score: 0,
            showScore: false,
            selectError: false,
            next: false,
            message: '',
            logout: false,
        }
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.handleRestart = this.handleRestart.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    getQuestions = () => {
        questionSet().then((questions) => {
            this.setState({ qSet: questions })
        })
    }

    onValueChange(e) {
        this.setState({
            selectedOption: e.target.value,
            selectError: false,
        })
    }

    handleAnswerSubmit = (e) => {
        e.preventDefault()

        if (this.state.selectedOption === '') {
            this.setState({
                selectError: true,
            })
        } else {
            if (
                this.state.selectedOption ===
                this.state.qSet[this.state.currnetQuestion].correctAnswer
            ) {
                this.setState({
                    score: this.state.score + 1,
                    message: 'Correct Answer',
                    next: true,
                })
            } else {
                this.setState({
                    message: 'Wrong Answer',
                    next: true,
                })
            }
        }
    }

    handleNext() {
        const nextQuestion = this.state.currnetQuestion + 1
        if (nextQuestion < this.state.qSet.length) {
            this.setState({
                currnetQuestion: nextQuestion,
                next: false,
                selectedOption: '',
            })
        } else {
            this.setState({
                showScore: true,
            })
        }
    }

    componentDidMount() {
        this.getQuestions()
    }

    handleRestart() {
        this.getQuestions()
        this.setState({
            currnetQuestion: 0,
            selectedOption: '',
            score: 0,
            showScore: false,
            selectError: false,
            next: false,
            message: '',
            logout: false,
        })
    }

    handleLogout() {
        this.setState({
            logout: true,
        })
    }

    render() {
        if (this.state.logout) {
            return <Redirect to="/" />
        }
        return (
            <div className="quiz-container">
                <div className="header">
                    <h1>Quiz App</h1>
                    <span onClick={this.handleLogout} className="logout">
                        Logout
                    </span>
                </div>
                <div className="quiz">
                    {this.state.showScore ? (
                        <div className="score-card">
                            <div className="score-text">
                                You have scored {this.state.score} out of 10.
                            </div>
                            <div
                                className="reset-button"
                                onClick={this.handleRestart}
                            >
                                Reset
                            </div>
                        </div>
                    ) : (
                        <>
                            {this.state.qSet.length > 0 && (
                                <>
                                    <div className="question-card">
                                        <div className="question-count">
                                            <span>
                                                Question{' '}
                                                {this.state.currnetQuestion + 1}
                                            </span>
                                            / 10
                                        </div>
                                        <div className="question-text">
                                            {
                                                this.state.qSet[
                                                    this.state.currnetQuestion
                                                ].question
                                            }
                                        </div>
                                    </div>
                                    <div className="answer-card">
                                        {this.state.next ? (
                                            <>
                                                <div className="message">
                                                    {this.state.message}
                                                </div>
                                                <button
                                                    onClick={this.handleNext}
                                                    className="answer-submit"
                                                >
                                                    Next
                                                </button>
                                            </>
                                        ) : (
                                            <form
                                                className="answer-form"
                                                onSubmit={
                                                    this.handleAnswerSubmit
                                                }
                                            >
                                                <div className="options">
                                                    {this.state.qSet[
                                                        this.state
                                                            .currnetQuestion
                                                    ].answers.map(
                                                        (answerOption) => (
                                                            <div
                                                                className="option-item"
                                                                key={
                                                                    answerOption
                                                                }
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="ans"
                                                                    id={
                                                                        answerOption
                                                                    }
                                                                    value={
                                                                        answerOption
                                                                    }
                                                                    checked={
                                                                        this
                                                                            .state
                                                                            .selectedOption ===
                                                                        answerOption
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .onValueChange
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={
                                                                        answerOption
                                                                    }
                                                                >
                                                                    {
                                                                        answerOption
                                                                    }
                                                                </label>
                                                            </div>
                                                        )
                                                    )}
                                                    <button
                                                        type="submit"
                                                        className="answer-submit"
                                                    >
                                                        Submit
                                                    </button>
                                                    {this.state.selectError && (
                                                        <span className="selection-error">
                                                            Please select an
                                                            option.
                                                        </span>
                                                    )}
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        )
    }
}
