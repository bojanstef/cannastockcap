import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-sm navbar-light bg-light ${css(styles.navbar)}`}>
                <div className="container-fluid main-container">
                    <a className="navbar-brand" href="/">
                        <img src="/logo.svg" width="320" height="80" alt="Logo" />
                    </a>
                    <div>
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
