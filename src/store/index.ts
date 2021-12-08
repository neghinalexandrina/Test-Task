import { compose, createStore } from 'redux';
import rootReducer from './reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = (state: any, action: any) => rootReducer(state, action)

let store = createStore(
    reducer,
    composeEnhancers()
)

export default store;
