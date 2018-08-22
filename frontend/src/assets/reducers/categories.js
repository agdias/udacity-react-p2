import {
    FETCH_CATEGORIES
} from '../constants/types'

const categories = (state = {}, action) => {

    const { categories } = action
    switch ( action.type ) {
        case FETCH_CATEGORIES:


          return ({
              ...state,
              ...categories
          })
        default:
          return state
    }
}

export default categories