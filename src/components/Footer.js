import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Logo } from '.';
import * as numeral from 'numeral';

export class Footer extends Component {
    render() {
        const totalMarketCap = numeral(this.props.totals.marketcap).format('$0,0');
        const lastUpdated = this.props.totals.tradetime;

        return (
            <div>
                <div className={`my-4 ${css(styles.centered)}`}>
                    <p className={css(styles.bold)}>Total Market Cap: {totalMarketCap}</p>
                    <p>Last updated: {lastUpdated} EDT</p>
                </div>
                <div className={`container-fluid ${css(styles.background)}`}>
                    <div className={`container-fluid main-container ${css(styles.footer)}`}>
                        <div className="row">
                            <div className='col-sm' >
                                <Logo src={'logo-light.svg'} />
                            </div>
                            <div className="col-sm">
                                To advertise with us fill out this <a href='https://goo.gl/forms/5tdz593AMMEYuGDB3' target='_blank' rel='noopener noreferrer'>form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    centered: {
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    background: {
        marginTop: '16px',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        height: '192px',
        backgroundColor: '#f8f9fa',
    },
    footer: {
        paddingTop: '32px',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        height: '192px',
    },
});
