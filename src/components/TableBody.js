import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import * as numeral from 'numeral';

export class TableBody extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.companies.map((company, index) => {
                        const readableIndex = index + 1;
                        const symbol = company.symbol;
                        const name = company.name;
                        const marketCap = numeral(company.marketcap).format('$0,0');
                        const price = numeral(company.price).format('$0,0.00');
                        const volume = numeral(company.volume).format('$0,0');
                        const shares = numeral(company.shares).format('0,0');
                        const changePercent = numeral(company.changepct).format('0.00');
                        const changePercentColor = css(changePercent.includes('-') ? styles.red : styles.green);
                        const graph = 'GRAPH';

                        return (
                            <tr>
                                <td>{readableIndex}</td>
                                <td>{symbol}</td>
                                <td>{name}</td>
                                <td>{marketCap}</td>
                                <td>{price}</td>
                                <td>{volume}</td>
                                <td>{shares}</td>
                                <td className={changePercentColor}>{changePercent}%</td>
                                <td>{graph}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
}

const styles = StyleSheet.create({
    red: {
        color: '#d14836'
    },
    green: {
        color: '#093'
    },
});
