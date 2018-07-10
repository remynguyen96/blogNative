import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppReducer } from './reducer';
// import { NativeModules } from 'react-native'

// if (__DEV__) {
  // console.log(NativeModules, 'NativeModules');
// }

const middlewares = [];

const enhancer = composeWithDevTools({})(
  applyMiddleware(...middlewares)
);

export const configureStore = (initialState) => {
  const store = createStore(AppReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducer').AppReducer);
    });
  }
  return store;
};

