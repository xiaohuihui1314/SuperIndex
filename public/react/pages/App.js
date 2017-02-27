import LayoutList from './LayoutList';
import Login from './Login';
import NormalLoginForm from './Register';
import '../css/index';
import {Provider} from 'react-redux';
import configureStore from '../redux/store/index';
const store = configureStore();
import {Router, Route, hashHistory} from 'react-router';
ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={LayoutList}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={NormalLoginForm}/>
            </Router>
         </Provider>
    ,
    document.getElementById("app"),()=> {
        let token = localStorage.getItem('token');
        console.log(token);
    }
);