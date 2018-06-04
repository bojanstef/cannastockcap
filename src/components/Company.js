import React, { Component } from 'react';

export class Company extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            company: {},
        };
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:5000/symbol/${this.props.match.params.symbol}`)
        .then(response => response.json())
        .then(json => {
            this.setState({company: json.data});
        });
    }

    render() { 
        return (
            <div>
                <p>It Works! {this.state.company.symbol}</p>
            </div>
        );
    }
}
