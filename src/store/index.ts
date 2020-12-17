import { ApiState } from './api_state/types';
import { DeadlineState } from './deadlines/types';
import { SessionState } from './session/types';
import dlReducer from './deadlines/reducer'
import ssReducer from './session/reducer'
import { applyMiddleware, createStore, compose, combineReducers, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import ASReducer from './api_state/reducer'
export const history = createBrowserHistory();


export interface RootState {
    session: SessionState,
    deadline: DeadlineState,
    apiState: ApiState
    router: any
}
const reducer = combineReducers<RootState>({
    deadline: dlReducer,
    session: ssReducer,
    apiState: ASReducer,
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

const store = createStore<RootState, any, {}, any>(
    reducer,
    compose(applyMiddleware(...middlewares),...enhancers)
)

export type ThunkDisp = ThunkDispatch<RootState, any, AnyAction>;


export const dispatch: ThunkDisp = store.dispatch;

export default store;