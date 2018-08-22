import {

    FETCH_CATEGORIES,
    FETCH_COMMENTS_BY_POST,
    FETCH_POSTS,
    FETCH_POSTS_BY_CATEGORY

} from '../constants/types'

import * as CategoryAPI from '../utils/APIs/CategoryAPI'
import * as PostAPI from '../utils/APIs/PostAPI'


export const fetchCategories = () =>  dispatch => (
    CategoryAPI.getAll().then(data => dispatch(fetchCategoriesSuccess(data)))
)
const fetchCategoriesSuccess = (categories) => {
    return ({
        type: FETCH_CATEGORIES,
        categories
    })
}

export const fetchPosts = () => dispatch => {
 PostAPI.getPosts()
   .then(data => dispatch(fetchPostsSuccess(data)))
}

export const fetchPostsSuccess = (posts) => {
    return ({
        type: FETCH_POSTS,
        posts
    })
}

export const fetchPostsByCategory = (category) => dispatch => {

  PostAPI.getPostByCategory(category)
    .then(data => dispatch(fetchPostsByCategorySuccess(data)))

}

export const fetchPostsByCategorySuccess = (posts) => {
    return ({
        type: FETCH_POSTS_BY_CATEGORY,
        posts
    })
}

export  const fetchCommentsByPostSuccess = (comments) => {
  return ({
      type: FETCH_COMMENTS_BY_POST,
      comments
  })
}

export const fetchCommentsByPost = (postId) => dispatch => {
    return PostAPI.getCommentByPost(postId)
      .then( data => dispatch(fetchCommentsByPostSuccess(data)))
}
