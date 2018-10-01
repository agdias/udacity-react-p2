import {
    DELETE_POST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_BY_CATEGORY_SUCCESS,
    FETCH_POST_BY_ID,
    UPDATE_POST
} from '../types'


const postsReducer = (state = {}, action) => {

    switch ( action.type ) {

        case DELETE_POST:

          const _ = require('underscore')

          return _.omit(state, action.id)




        case FETCH_POSTS_SUCCESS:
          const postsObj = {}
          for (let post of action.posts) {
              postsObj[post.id] = post
          }
          return postsObj

        case FETCH_POST_BY_ID:

         return Object.assign({}, state, action.post)

         case UPDATE_POST:

           return {...state, [action.id]: action.post}

        case FETCH_POSTS_BY_CATEGORY_SUCCESS:

            const postsByCategoryObj = {}
            for (let post of action.posts) {
                postsByCategoryObj[post.id] = post
            }
            return postsByCategoryObj






        default:
          return state
    }
}

export default postsReducer;