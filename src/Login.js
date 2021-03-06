import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Form.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
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
        if (this.state.email === '') {
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
                    <div className="form-title">Login</div>
                    <form className="form" onSubmit={this.handelSubmit}>
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
                        <button className="submit-button" type="submit">
                            Login
                        </button>
                        <p className="form-change">
                            Don't have an account?{' '}
                            <Link to="/register" className="form-change-link">
                                Register.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
