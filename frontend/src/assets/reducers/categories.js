
import {
    FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE
} from '../types'



const categories = (state = {}, action) => {

    const { categories , error } = action
    
    
    switch ( action.type ) {
        

        case FETCH_CATEGORIES:
         return ({
             ...state,
             ...categories
         })

         case FETCH_CATEGORIES_FAILURE:
         
           return ({error})
        default:
          return state
    }

}

export default categories