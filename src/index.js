import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer  from './reducers'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd('action.type',action.type)
  return result
}


const store = createStore(
  categoryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
)




ReactDOM.render(

  <Provider store={store} >
     <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
