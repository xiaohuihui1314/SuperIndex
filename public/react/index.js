import rootRoute from './routes/index'
import './css/index';
import {Provider} from 'react-redux';
import configureStore from './redux/store/index';
const store = configureStore();
import {Router, hashHistory} from 'react-router';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}
                routes={rootRoute}/>
    </Provider >,
    document.getElementById("app"), () => {
        let token = localStorage.getItem('token');
        console.log(token);

    }
);