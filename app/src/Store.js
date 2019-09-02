import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import analyticsMiddleware from './middleware/analytics'
import PostsReducer from './reducers/posts'
import SortReducer from './reducers/sort'

export const history = createBrowserHistory()

const combinedReducers = combineReducers({
    PostsReducer,
    SortReducer,
})

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history),
    analyticsMiddleware,
]

// Enable redux dev tools in development
if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    combinedReducers,
    initialState,
    composedEnhancers
)

export default store

