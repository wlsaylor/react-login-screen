import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="../public/index.html">React Test Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="../public/index.html">Home</a>
                            <a className="nav-link" href="../public/index.html">Features</a>
                            <a className="nav-link" href="../public/index.html">Links</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
