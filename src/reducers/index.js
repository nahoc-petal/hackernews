// @flow

import { combineReducers } from 'redux'
import NavReducer from './nav'
import StoriesReducer from './stories'

const AppReducer = combineReducers({
  nav: NavReducer,
  stories: StoriesReducer,
})

export default AppReducer
