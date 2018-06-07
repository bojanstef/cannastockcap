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
            metadata: {},
            companies: [],
        };
    }

    componentDidMount() {
        fetch('http://cannastockcap-dev.us-west-1.elasticbeanstalk.com/companies')
        .then(response => response.json())
        .then(json => {
            this.setState({ companies: json.data });
        });
    }

    render() {
        const companies = this.state.companies;
        const totals = {
            'companies': companies.length,
            'marketcap': companies.reduce((accum, next) => { return accum + this.numberValue(next.marketcap) }, 0),
            'volume': companies.reduce((accum, next) => { return accum + this.numberValue(next.volume) }, 0),
            'tradetime': this.getTradeTime(companies)
        };

        return (
            <div>
                <Toolbar totals={totals}/>
                <Navbar />
                <Route exact path="/" render={(props) => <Companies companies={companies} {...props} />} />
                <Route path="/symbol/:symbol" component={Company} />
                <Footer totals={totals} />
            </div>
        );
    }

    numberValue(string) {
        return isNaN(string) ? 0 : Number(string)
    }

    getTradeTime(companies) {
        return (typeof companies[0] === 'undefined') ? '' : companies[0].tradetime
    }
}
