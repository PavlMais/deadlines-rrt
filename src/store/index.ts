import dlReducer from './deadlines/reducer'
import ssReducer from './session/reducer'
import { applyMiddleware, configureStore, createStore, compose, EnhancedStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();


export interface RootState {
    session: SessionState,
    deadline: DeadlineState,
    router: any
}
const reducer = combineReducers<RootState>({
    deadline: dlReducer,
    session: ssReducer,
    router: connectRouter(history),
})


const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof (window as any) !== 'undefined' && (window as any).devToolsExtension) {
      (window as any).devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
      enhancers.push((window as any).devToolsExtension());
    }


const middlewares = [
    thunkMiddleware,
    routerMiddleware(history)
]

const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares),...enhancers)
)



export default store;