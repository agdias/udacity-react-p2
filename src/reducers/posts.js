import {
    FETCH_POSTS
} from '../assets/types'

const posts  = (state = {}, action) => {
  const { posts } = action
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...posts
          }
        default:
          return state;
    }
}

export default posts;