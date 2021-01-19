import React, { Component } from 'react'

import './Quiz.css'

export default class Quiz extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currnetQuestion: 0,
       score: 0,
       showScore: false
    }
  }
  
    render() {
        return (
            <div className="quiz-container">
                <div className="quiz">
                    <div className="question-card">
                        <div className="question-count">
                            <span>Question 1</span>/ 10
                        </div>
                        <div className="question-text">What is what?</div>
                    </div>
                    <div className="answer-card">
                        <form className="answer-form">
                            <div className="options">
                                <div>
                                    <input
                                        type="radio"
                                        name="ans"
                                        id="Answer1"
                                        value="Answer 1"
                                    />
                                    <label htmlFor="Answer1">Answer 1</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="ans"
                                        id="Answer2"
                                        value="Answer 2"
                                    />
                                    <label htmlFor="Answer2">Answre 2</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="ans"
                                        id="Answer3"
                                        value="Answer 3"
                                    />
                                    <label htmlFor="Answer3">Answer 3</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="ans"
                                        id="Answer4"
                                        value="Answer 4"
                                    />
                                    <label htmlFor="Answer4">Answer 4</label>
                                </div>
                                <button type="submit" className="answer-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
