import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'; 

ReactGA.initialize('UA-120527938-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
