import React, { Component } from 'react';
import { 
    Toolbar, 
    Navbar, 
    Table 
} from './components';

export default class App extends Component {
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
            console.log(json.data);
            this.setState({companies: json.data});
        });
    }

    render() {
        const totals = {
            'companies': this.state.companies.length,
            'marketcap': this.state.companies.reduce((accum, next) => { return accum + this.numberValue(next.marketcap) }, 0),
            'volume': this.state.companies.reduce((accum, next) => { return accum + this.numberValue(next.volume) }, 0)
        };

        return (
            <div>
                <Toolbar totals={totals} />
                <Navbar />
                <Table companies={this.state.companies} />
            </div>
        );
    }

    numberValue(string) {
        return isNaN(string) ? 0 : Number(string)
    }
}
