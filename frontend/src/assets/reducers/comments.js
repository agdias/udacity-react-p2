import {
    FETCH_COMMENTS_BY_POST
 }  from '../constants/types'

const comments = (state=[], action) => {
    const { comments } = action
    switch ( action.type ) {
        case FETCH_COMMENTS_BY_POST:

          return ({
              ...state,
              ...comments
          })

        default: return state
    }
}

export default comments