import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS
} from '../actions'




const categoryReducer = ( state = [], action ) => {

  switch (action.type) {

    case FETCH_CATEGORIES_BEGIN:
      return {
        ...state
      }
    case FETCH_CATEGORIES_SUCCESS:

      return {
        ...state,
        categories: action.categories
      }


    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        categories: []
      }

    default:
     return state;
  }

}

export default categoryReducer
