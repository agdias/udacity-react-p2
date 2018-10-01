import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './assets/reducers/index'

import './assets/styles/index.css'
import './assets/styles/toolbar.css'
import './assets/styles/comments.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next getstate', store.getState())
//     console.groupEnd('action.type',action.type)
//     return result
//   }

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )



ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
   , document.getElementById('root'));
registerServiceWorker();
