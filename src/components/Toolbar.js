import React, { Component } from 'react';

export class Toolbar extends Component {
    render() {
        return (
            <nav className="nav nav-pills nav-fill navbar-light bg-light">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <a className="nav-item nav-link disabled">Companies</a>
                        <a className="nav-item nav-link disabled">Market Cap</a>
                        <a className="nav-item nav-link disabled">24h Volume</a>    
                    </div>
                </div>
            </nav>
        );
    }
}
