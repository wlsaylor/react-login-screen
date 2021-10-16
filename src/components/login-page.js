import React from "react";
import NavBar from "./nav-bar";
import LoginForm from "./login-form";

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container main">
                <NavBar />
                <LoginForm />
            </div>
        );
    }
}
