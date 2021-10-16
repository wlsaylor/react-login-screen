import React from "react";
import LoginButton from "./login-button";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <form className="login-card form-group">
                    <div className="login-header">
                        <h3>Log In</h3>
                    </div>
                    <div className="login-card-body">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"></input>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" name="password"></input>
                    </div>
                    <div className="button-container">
                        <LoginButton />
                    </div>
                </form>
            </div>
        );
    }
}
