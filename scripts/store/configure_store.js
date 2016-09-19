import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant')(), thunk] :
  [thunk];

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );
};