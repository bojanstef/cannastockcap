import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Logo } from '.';

export class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-sm navbar-light bg-light ${css(styles.navbar)}`}>
                <div className="container-fluid main-container">
                    <a className="navbar-brand" href="/">
                        <Logo src={'logo.svg'} />
                    </a>
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
