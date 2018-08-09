
import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
const rootReducer = combineReducers({
  categories,
  posts
})
export  default  rootReducer;
