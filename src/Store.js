import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import clientMiddleware from './middleware/clientMiddleware'
import {instance} from './helpers/apiClient'

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise,clientMiddleware(instance));

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        // devTools({
        //     name: Platform.OS,
        //     hostname: 'localhost',
        //     port: 5678
        // }),
    )
);

export default Store;
