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
                        const market = company.market;
                        const symbol = company.symbol;
                        const name = company.name;
                        const marketCap = numeral(company.marketcap).format('$0,0');
                        const price = numeral(company.price).format('$0,0.00');
                        const volume = numeral(company.volume).format('$0,0');
                        const shares = numeral(company.shares).format('0,0');
                        const changePercent = numeral(company.changepct).format('0.00');
                        const changePercentColor = css(changePercent.includes('-') ? styles.red : styles.green);

                        return (
                            <tr key={readableIndex}>
                                <td>{readableIndex}</td>
                                <td>{symbol}</td>
                                
                                <td><a href={`http://www.google.com/finance/?q=${market}:${symbol}`} target='_blank'>{name}</a></td>
                                {/* <td><a href={`/symbol/${symbol}/`}>{name}</a></td> */}

                                <td>{marketCap}</td>

                                <td><a href={`http://www.google.com/finance/?q=${market}:${symbol}`} target='_blank'>{price}</a></td>
                                {/* <td><a href={`/symbol/${symbol}/#price`}>{price}</a></td> */}

                                <td><a href={`http://www.google.com/finance/?q=${market}:${symbol}`} target='_blank'>{volume}</a></td>
                                {/* <td><a href={`/symbol/${symbol}/#volume`}>{volume}</a></td> */}

                                <td><a href={`http://www.google.com/finance/?q=${market}:${symbol}`} target='_blank'>{shares}</a></td>
                                {/* <td><a href={`/symbol/${symbol}/#shares`}>{shares}</a></td> */}
                                
                                <td className={changePercentColor}>{changePercent}%</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
}

const styles = StyleSheet.create({
    red: { color: '#d14836' },
    green: { color: '#093' },
});
