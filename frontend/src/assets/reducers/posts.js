import {
     FETCH_POSTS_BY_CATEGORY,
     FETCH_POSTS,

} from '../constants/types'



const posts= ( state = [], action ) => {
    const { posts } = action
    switch ( action.type ) {
        case FETCH_POSTS_BY_CATEGORY:
          return ({
              ...posts
          })

        case FETCH_POSTS:
          return ({
              ...posts
          })



        default: return state;
    }

}

export default  posts