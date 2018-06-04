import React, { Component } from 'react';

export class Company extends Component {
    render() { 
        return (
            <div>
                <p>It Works! {(this.props.company || '').symbol}</p>
            </div>
        );
    }
}
