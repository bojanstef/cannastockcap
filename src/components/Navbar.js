import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid main-container">
                    <a className="navbar-brand" href="#home">CannaStockCap</a>
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
                </div>
            </nav>
        );
    }
}
