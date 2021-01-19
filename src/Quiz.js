import React, { Component } from 'react'

import './Quiz.css'
import questionSet from './questions'

export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            qSet: [],
            currnetQuestion: 0,
            score: 0,
            showScore: false,
        }
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
    }

    getQuestions = () => {
        questionSet().then((questions) => {
            this.setState({ qSet: questions })
        })
    }

    handleAnswerSubmit = (e, correctAnswer) => {
        e.preventDefault()
        alert(correctAnswer)
        // this.setState((state) => ({
        //     isToggleOn: !state.isToggleOn,
        // }))
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <div className="quiz-container">
                {this.state.qSet.length > 0 && (
                    <div className="quiz">
                        <div className="question-card">
                            <div className="question-count">
                                <span>Question 1</span>/ 10
                            </div>
                            <div className="question-text">
                                {
                                    this.state.qSet[this.state.currnetQuestion]
                                        .question
                                }
                            </div>
                        </div>
                        <div className="answer-card">
                            <form
                                className="answer-form"
                                onSubmit={() =>
                                    this.handleAnswerSubmit(
                                        this.state.qSet[
                                            this.state.currnetQuestion
                                        ].correctAnswer
                                    )
                                }
                            >
                                <div className="options">
                                    {this.state.qSet[
                                        this.state.currnetQuestion
                                    ].answers.map((answerOption) => (
                                        <div key={answerOption}>
                                            <input
                                                type="radio"
                                                name="ans"
                                                id={answerOption}
                                                value={answerOption}
                                            />
                                            <label htmlFor={answerOption}>
                                                {answerOption}
                                            </label>
                                        </div>
                                    ))}
                                    <button
                                        type="submit"
                                        className="answer-submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
