import App from '../pages/App'

 const rootRoute = {
    childRoutes: [ {
        path: '/',
        component:App,
        childRoutes: [
            require('./login'),
            require('./register'),
            require('./users'),
            require('./redirect'),
        ]
    } ]
};
export {
    rootRoute as default
}