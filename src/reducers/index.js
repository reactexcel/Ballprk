import {combineReducers} from 'redux';
import info from './datastate';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Will import and use reducer here 
    info,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
