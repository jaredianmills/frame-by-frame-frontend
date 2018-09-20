import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/reducer'

const store = createStore(userReducer, applyMiddleware(thunk))

export default store
