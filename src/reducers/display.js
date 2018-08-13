import {
    CHANGE_DISPLAY
} from '../assets/types'

const display = ( state = 'all', action ) => {


    switch ( action.type ) {
      case CHANGE_DISPLAY:
        return action.filter
      default:
        return state
    }

}

export default display