import React, { Component } from 'react';

export class TableHeader extends Component {
    render() {
        return (
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
        );
    }
}
