import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    // redux-logger 中间件输出的 action 日志，它们清晰地反映了业务逻辑是怎样的
    // createLogger()
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer)
        });
    }

    return store;
}
