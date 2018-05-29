import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
import Navbar from './components/Navbar.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                <Navbar />
            </div>
        );
    }
}

export default App;
