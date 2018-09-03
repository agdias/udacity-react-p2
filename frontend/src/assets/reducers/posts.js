import {
    FETCH_POSTS,
    UPDATE_POST,
    UPDATE_VOTE_SCORE
} from '../types'
let postObject = {}
const posts  = (state={}, action) => {
    const { post, id, voteScore } = action
   
    switch (action.type) {
        case FETCH_POSTS:
            const posts = {}
            for (let post of action.posts) {
                posts[post.id] = post;
            }
            
            return({
            ...state,
            ...posts
            })

       case UPDATE_POST:
         return ({
             ...state.posts,
             [post.id]: {
               ...post
             }
         })

    

        default: 
          return state
    }
}

export default posts