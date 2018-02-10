// @flow

import React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import AppReducer from './reducers'
import AppWithNavigationState from './navigators/AppNavigator'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ))
  return createStore(AppReducer, initialState, enhancer)
}

const store = configureStore({})

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default ReduxExampleApp
