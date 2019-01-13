import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

export default createStore(reducers, applyMiddleware(
    loggerMiddleware
));


