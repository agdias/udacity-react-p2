import {
    FETCH_COMMENTS_PER_POST,
    UPDATE_COMMENT
} from '../types'

const commentsReducer = (state ={}, action ) => {
    const { comments } = action

    switch(action.type) {
        case FETCH_COMMENTS_PER_POST:
        const commentsObj = {}
        for (let comment of comments) {
            commentsObj[comment.id] = comment
        }
        return commentsObj


        case UPDATE_COMMENT:
          return {
            ...state,
            [action.id]:action.comment }

        default:
          return state
    }
}

export default commentsReducer