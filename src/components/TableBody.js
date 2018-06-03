import React, { Component } from 'react';
import numeral from 'numeral';

export class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.companies.map((company, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{company.symbol}</td>
                        <td>{company.name}</td>
                        <td>{numeral(company.marketcap).format('$0,0')}</td>
                        <td>{numeral(company.price).format('$0,0.00')}</td>
                        <td>{numeral(company.volume).format('$0,0')}</td>
                        <td>{numeral(company.shares).format('0,0')}</td>
                        <td>{numeral(company.changepct).format('0.00')}%</td>
                        <td>GRAPH</td>
                    </tr>
                })}
            </tbody>
        );
    }
}
