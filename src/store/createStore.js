import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from '../reducers/index'
import rootSaga from '../sagas/rootSaga';


const createStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = []
  let composeEnhancers = compose;

   const middleware = [sagaMiddleware];
   const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  sagaMiddleware.run(rootSaga);
  return store
}

export default createStore