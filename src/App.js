import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Create a <Toolbar /> element. */}
                <nav class="nav nav-pills nav-fill navbar-light bg-light">
                    <a class="nav-item nav-link disabled">Companies</a>
                    <a class="nav-item nav-link disabled">Market Cap</a>
                    <a class="nav-item nav-link disabled">24h Volume</a>
                </nav>

                {/* Create a <Navbar /> element. */}
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a className="navbar-brand" href="#">CannaStockCap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar" aria-controls="collapsible-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsible-navbar">
                        <ul className="navbar-nav mr-auto"></ul>
                        <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search" />
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default App;
