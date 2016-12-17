import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import '../css/index';
import {Provider} from 'react-redux';
import configureStore from '../redux/store/index';
const store = configureStore();
import {Router, Route, hashHistory} from 'react-router';
ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Router>
         </Provider>
    ),
    document.getElementById("app"),()=> {
    /*    setInterval(()=>{
            document.getElementsByClassName("gorgeous")[0].style.transform = "scaleX(." + Math.ceil(Math.random() * 10) + ")"
        }, 120);*/
    }
);