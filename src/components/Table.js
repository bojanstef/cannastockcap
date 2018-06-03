import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
const numeral = require('numeral');

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companies: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/listings')
        .then(response => response.json())
        .then(json => {
            this.setState({companies: json.data});
        });
    }

    render() {
        return (
            <div className={`container ${css(styles.tableContainer)}`}>
                <div className="table-responsive">
                    <div>
                        <p className={css(styles.tableTitle)}>Top Cannabis Companies by Market Capitalization</p>
                    </div>
                    <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Shares</th>
                        <th>Change (24h)</th>
                        <th>Price Graph (7d)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.companies.map((company, index) => {
                            return <tr>
                                        <td>{index + 1}</td>
                                        <td>{company.symbol}</td>
                                        <td>{company.name}</td>
                                        <td>{numeral(company.marketcap).format('$0,0')}</td>
                                        <td>{numeral(company.price).format('$0,0.00')}</td>
                                        <td>{numeral(company.volume).format('$0,0')}</td>
                                        <td>{numeral(company.shares).format('0,0')}</td>
                                        <td>{company.changepct}%</td>
                                        <td>GRAPH</td>
                                    </tr>
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: '8%',
    },
    tableTitle: {
        textAlign: 'center',
        fontSize: 32,
    },
});
