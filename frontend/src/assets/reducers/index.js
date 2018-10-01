import { combineReducers } from 'redux'


import categoryReducer from './categoryReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers ({
    categoryReducer,
    commentsReducer,
    postsReducer
})

export default rootReducer