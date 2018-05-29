import React, { Component } from 'react';
import { 
    Toolbar, 
    Navbar, 
    Table 
} from './components';

export default class App extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Navbar />
                <Table />
            </div>
        );
    }
}
