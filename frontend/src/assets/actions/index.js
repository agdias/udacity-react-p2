import * as ReadableAPI  from '../apis/ReadableAPI'
import { FETCH_CATEGORIES, 
         FETCH_CATEGORIES_FAILURE,  
         FETCH_POSTS,
         UPDATE_VOTE_SCORE,
         UPDATE_POST
        } from '../types'

export const fetchCategoriesAction = (categories) => {

    return ({
        type: FETCH_CATEGORIES,
        categories
    })
}

export const fetchCategoriesFailureAction = ( error ) => {
    return ({
        type: FETCH_CATEGORIES_FAILURE,
        error
    })
}

export const fetchPostsAction = (posts) => ({
    type: FETCH_POSTS,
    posts
    
})

export const updatePostAction = (post) => ({
    type: UPDATE_POST,
    post
})



   

export const fetchCategories = () => dispatch => (
    
   ReadableAPI.getCategories()
     .then(data => dispatch(fetchCategoriesAction(data.categories)))
     .catch(error => dispatch(fetchCategoriesFailureAction(error)))
   
)

export const fetchPosts = () => dispatch =>  (
     ReadableAPI.getPosts()
       .then(data => dispatch(fetchPostsAction(data)))
    
)

export const updateVoteScore = (id, vote) => dispatch => {
    ReadableAPI.updateVoteScore(id,vote)
     .then(data => dispatch(updatePostAction(data)))
}


