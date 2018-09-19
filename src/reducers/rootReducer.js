import { combineReducers } from 'redux';
import userReducer from './userReducer'

const rootRecuer = combineReducers({
  user: userReducer
})

export default rootRecuer
