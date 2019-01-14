import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk' 

const loggerMiddleware = createLogger();

export default createStore(reducers, applyMiddleware(
    ReduxThunk,
    loggerMiddleware
));


