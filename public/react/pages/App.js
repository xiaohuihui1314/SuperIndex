import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import '../css/index';
import { Router, Route, hashHistory } from 'react-router';
ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Index}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Router>
    ),
    document.getElementById("app"),()=>{
        setInterval(function () {
            document.getElementsByClassName("gorgeous")[0].style.transform="scaleX(."+Math.ceil(Math.random()*10)+")"
        },120);
    }
);