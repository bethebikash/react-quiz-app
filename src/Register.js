import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Form.css'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorType: '',
            redirect: false,
        }

        this.handelOnChange = this.handelOnChange.bind(this)
    }

    handelOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handelSubmit = (e) => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        e.preventDefault()
        if (this.state.name === '') {
            this.setState({
                errorType: 'nullName',
            })
        } else if (this.state.email === '') {
            this.setState({
                errorType: 'nullEmail',
            })
        } else if (!validEmail.test(this.state.email)) {
            this.setState({
                errorType: 'invalidEmail',
            })
        } else if (this.state.password === '') {
            this.setState({
                errorType: 'nullPassword',
            })
        } else if (this.state.confirmPassword === '') {
            this.setState({
                errorType: 'nullConfirmPassword',
            })
        } else if (!this.state.confirmPassword === this.state.password) {
            this.setState({
                errorType: 'notMatch',
            })
        } else {
            this.setState({
                redirect: true,
            })
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/app" />
        }

        return (
            <div className="form-container">
                <div className="card">
                    <div className="form-title">Registration</div>
                    <form onSubmit={this.handelSubmit} className="form">
                        <label className="form-label">
                            <span>Full Name</span>
                            <input
                                onChange={this.handelOnChange}
                                type="text"
                                name="name"
                                value={this.state.name}
                            />
                            {this.state.errorType === 'nullName' && (
                                <span className="error-msg">
                                    Name is required.
                                </span>
                            )}
                        </label>
                        <label className="form-label">
                            <span>Email</span>
                            <input
                                onChange={this.handelOnChange}
                                type="text"
                                name="email"
                                value={this.state.email}
                            />
                            {this.state.errorType === 'nullEmail' && (
                                <span className="error-msg">
                                    Email is required.
                                </span>
                            )}
                            {this.state.errorType === 'invalidEmail' && (
                                <span className="error-msg">
                                    Invalid email.
                                </span>
                            )}
                        </label>
                        <label className="form-label">
                            <span>Password</span>
                            <input
                                onChange={this.handelOnChange}
                                type="password"
                                name="password"
                                value={this.state.password}
                            />
                            {this.state.errorType === 'nullPassword' && (
                                <span className="error-msg">
                                    Password is required.
                                </span>
                            )}
                        </label>
                        <label className="form-label">
                            <span>Confirm Password</span>
                            <input
                                onChange={this.handelOnChange}
                                type="password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                            />
                            {this.state.errorType === 'nullConfirmPassword' && (
                                <span className="error-msg">
                                    Confirm password is required.
                                </span>
                            )}
                            {this.state.errorType === 'notMatch' && (
                                <span className="error-msg">
                                    Confirm password does not match with
                                    password.
                                </span>
                            )}
                        </label>
                        <button className="submit-button" type="submit">
                            Register
                        </button>
                        <p className="form-change">
                            Already have an account?{' '}
                            <Link to="/" className="form-change-link">
                                Login.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
