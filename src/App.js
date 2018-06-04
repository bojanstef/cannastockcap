import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { 
    Toolbar,
    Navbar,
    Companies,
    Company,
    Footer
} from './components';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companies: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/companies')
        .then(response => response.json())
        .then(json => {
            this.setState({companies: json.data});
        });
    }

    render() {
        const companies = this.state.companies;
        const totals = {
            'companies': companies.length,
            'marketcap': companies.reduce((accum, next) => { return accum + this.numberValue(next.marketcap) }, 0),
            'volume': companies.reduce((accum, next) => { return accum + this.numberValue(next.volume) }, 0)
        };

        return (
            <div>
                <Toolbar totals={totals}/>
                <Navbar />
                <Route exact path="/" render={(props) => <Companies companies={companies} {...props} />} />
                <Route path="/symbol/:symbol" component={Company} />
                <Footer />
            </div>
        );
    }

    numberValue(string) {
        return isNaN(string) ? 0 : Number(string)
    }
}
