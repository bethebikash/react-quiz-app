import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Form.css'

class Register extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="card">
                    <div className="form-title">Registration</div>
                    <form className="form">
                        <label className="form-label">
                            <span>Full Name</span>
                            <input type="text" name="name" />
                        </label>
                        <label className="form-label">
                            <span>Email</span>
                            <input type="email" name="email" />
                        </label>
                        <label className="form-label">
                            <span>Password</span>
                            <input type="password" name="password" />
                        </label>
                        <label className="form-label">
                            <span>Confirm Password</span>
                            <input type="password" name="comfirm-password" />
                        </label>
                        <button className="submit-button" type="submit">
                            Register
                        </button>
                        <p className="form-change">
                            Already have an account?{' '}
                            <Link to="/"  className="form-change-link">
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
