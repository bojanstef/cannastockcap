import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-sm navbar-light bg-light ${css(styles.navbar)}`}>
                <div className="container-fluid main-container">
                    <a class="navbar-brand" href="#home">
                        <img src="/logo.svg" width="320" height="80" alt="Logo" />
                    </a>
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

const styles = StyleSheet.create({
    navbar: {
        height: 96
    }
});
