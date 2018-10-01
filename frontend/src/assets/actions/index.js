import * as ReadableAPI from '../../utils/ReadableAPI'
import {
    DELETE_POST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_COMMENTS_PER_POST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_BY_CATEGORY_SUCCESS,
    FETCH_POST_BY_ID,
    UPDATE_COMMENT,
    UPDATE_POST
} from '../types'


export const deletePostSuccess = (id) => ({

    type: DELETE_POST,
    id

})
export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories

})



export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    posts

})

export const fetchPostsByCategorySuccess = (posts) => ({
    type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
    posts
})

export const fetchPostsByCategory = (category) => dispatch => {
    return ReadableAPI.getPostsByCategory(category)
      .then(data => dispatch(fetchPostsByCategorySuccess(data)))
}

export const  fetchCategories = () => dispatch => {

    return ReadableAPI.getAllCategories()
             .then(data => dispatch(fetchCategoriesSuccess(data.categories)))


}

export const fetchPosts = () => dispatch => {
  return ReadableAPI.getAllPosts()
    .then(data => dispatch(fetchPostsSuccess(data)))

}

export const fetchPostByIdSuccess = (post) => ({

    type: FETCH_POST_BY_ID,
    post

})

export const updatePostSuccess = (post,id) => ({
    type: UPDATE_POST,
    post,
    id
})

/***
 *
 * 
 */

export const updateCommentSuccess = (comment, id) => ({
    type: UPDATE_COMMENT,
    comment,
    id
})

export const fetchCommentsPerPostAction = (comments) => ({
  type: FETCH_COMMENTS_PER_POST,
  comments
})


export const fetchPostById = (id) => dispatch => {

    return ReadableAPI.getPostDetails(id)
      .then(data => dispatch(fetchPostByIdSuccess(data)))
}

export const updatePost = (id) => dispatch => {

    return ReadableAPI.getPostDetails(id)

      .then(data => dispatch(updatePostSuccess(data,id)))

}

export const updateComment = (id) => dispatch => {
    return ReadableAPI.getCommentDetails(id)
      .then(data =>  dispatch(updateCommentSuccess(data,id)))

}

export const fetchCommentsPerPost = (id) => dispatch => {

    return ReadableAPI.getCommentsPerPost(id)
      .then(data => dispatch(fetchCommentsPerPostAction(data)))
}

export const deletePost = (id) => dispatch => {
  dispatch(deletePostSuccess(id))
}


