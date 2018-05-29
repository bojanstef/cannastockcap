import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Create a <Toolbar /> element. */}
                <nav className="nav nav-pills nav-fill navbar-light bg-light">
                    <a className="nav-item nav-link disabled">Companies</a>
                    <a className="nav-item nav-link disabled">Market Cap</a>
                    <a className="nav-item nav-link disabled">24h Volume</a>
                </nav>

                {/* Create a <Navbar /> element. */}
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#goHome">CannaStockCap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar" aria-controls="collapsible-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsible-navbar">
                        <ul className="navbar-nav mr-auto"></ul>
                        <form className="form-inline my-2 my-md-0">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-companies" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="search-companies"><i className="fa fa-search"></i></span>
                        </div>
                        </div>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default App;
