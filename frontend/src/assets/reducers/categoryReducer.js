import {
  FETCH_CATEGORIES_SUCCESS,
} from '../types'



const categoryReducer = ( state = {}, action ) => {

    switch ( action.type ) {



          case FETCH_CATEGORIES_SUCCESS: {
              return ({
                  ...state,
                  ...action.categories
              })
          }



        default:
          return state;
    }
}

export default categoryReducer;