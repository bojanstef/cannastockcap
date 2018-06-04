import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class Footer extends Component {
    render() {
        return (
            <div className={css(styles.footer)}>
                <p>Footer.</p>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'red',
    },
});
