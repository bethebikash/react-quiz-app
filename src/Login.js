import React, { Component } from 'react'

import './Form.css'

class Login extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="card">
                    <div className="form-title">Login</div>
                    <form className="form">
                        <label className="form-label">
                            <span>Email</span>
                            <input type="email" name="email" />
                        </label>
                        <label className="form-label">
                            <span>Password</span>
                            <input type="password" name="password" />
                        </label>
                        <button className="submit-button" type="submit">
                            Login
                        </button>
                        <p className="form-change">
                            Don't have an account?{' '}
                            <a className="form-change-link" href="#">
                                Register.
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
