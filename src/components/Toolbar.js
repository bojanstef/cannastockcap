import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import * as numeral from 'numeral';

export class Toolbar extends Component {
    render() {
        const totalCompanies = this.props.totals.companies
        const totalMarketCap = numeral(this.props.totals.marketcap).format('$0,0');
        const totalVolume = numeral(this.props.totals.volume).format('$0,0');

        return (
            <nav className={`nav nav-tabs nav-fill navbar-light bg-light ${css(styles.toolbar)}`}>
                <div className='container-fluid main-container'>
                    <div className="row justify-content-md-center">
                        <a className={`nav-item disabled ${css(styles.pill)}`}>Companies:<p className={css(styles.detail)}>{totalCompanies}</p></a>
                        <a className={`nav-item disabled ${css(styles.pill)}`}>Market Cap:<p className={css(styles.detail)}>{totalMarketCap}</p></a>
                        <a className={`nav-item disabled ${css(styles.pill)}`}>24h Volume:<p className={css(styles.detail)}>{totalVolume}</p></a>
                    </div>
                </div>
            </nav>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        paddingTop: 12,
        fontSize: 14,
    },
    pill: {
        display: 'inline-flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    detail: {
        fontWeight: 'bold'
    }
});
