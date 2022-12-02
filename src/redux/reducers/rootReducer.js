// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import questionReducer from './questionReducer'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  question:questionReducer
})

export default rootReducer
