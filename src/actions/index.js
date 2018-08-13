import * as CategoryAPI from '../Util/CategoryAPI';
import * as PostAPI from '../Util/PostAPI';
import { FETCH_CATEGORIES,
         FETCH_POSTS,
         CHANGE_DISPLAY
       }
from '../assets/types'

export const setDisplay = (filter) => {
  return ({
    type: CHANGE_DISPLAY,
    filter
  })
}
export const fetchCategoriesSuccess = (categories) => {

  return ({
    type: FETCH_CATEGORIES,
    categories
  });
};

export const fetchCategories = () => dispatch => {

   CategoryAPI.getAll()
    .then((data) => dispatch(fetchCategoriesSuccess(data)))
}

export const fetchPostsSuccess = (posts) => {
  return ({
    type: FETCH_POSTS,
    posts
  })

}

export const fetchPosts = () => dispatch =>  {
  PostAPI.getAll()
    .then(posts => dispatch(fetchPostsSuccess(posts)))

}

