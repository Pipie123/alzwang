import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import About from "./About";
import Contact from "./Contact"
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div><BrowserRouter>
        <Route path="/" component={App} exact/>
        <Route path="/sub" component={About}/>
        <Route path="/contact" component={Contact}/>
    </BrowserRouter></div>, document.getElementById('root'));

