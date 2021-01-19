import React, { Component } from 'react'

import './Quiz.css'
import questionSet from './questions'

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
        }
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
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
                })
            }

            const nextQuestion = this.state.currnetQuestion + 1
            if (nextQuestion < this.state.qSet.length) {
                this.setState({
                    currnetQuestion: nextQuestion,
                })
            } else {
                this.setState({
                    showScore: true,
                })
            }
        }
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <div className="quiz-container">
                <div className="quiz">
                    {this.state.showScore ? (
                        <div className="score-card">
                            <div class="score-text">
                                You have scored {this.state.score} out of 10.
                            </div>
                            <div className="reset-button">Reset</div>
                        </div>
                    ) : (
                        <>
                            {this.state.qSet.length > 0 && (
                                <>
                                    <div className="question-card">
                                        <div className="question-count">
                                            <span>Question 1</span>/ 10
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
                                        <form
                                            className="answer-form"
                                            onSubmit={this.handleAnswerSubmit}
                                        >
                                            <div className="options">
                                                {this.state.qSet[
                                                    this.state.currnetQuestion
                                                ].answers.map(
                                                    (answerOption) => (
                                                        <div key={answerOption}>
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
                                                                    this.state
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
                                                                {answerOption}
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
                                            </div>
                                            <span>slecct</span>
                                        </form>
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
