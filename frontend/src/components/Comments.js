import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Utils from '../utils/Utils'
import Toolbar from './Toolbar'
import * as ReadableAPI from '../utils/ReadableAPI';
import { updateComment, fetchCommentsPerPost} from '../assets/actions'

class Comments extends Component {


    upVote = (event,id) => {
      const { dispatch } = this.props
      console.log(this.props)

      ReadableAPI.updateCommentsVoteScore(id, 'upVote')
      dispatch(updateComment(id))
    }

    downVote = (event,id) => {
      const { dispatch } = this.props
      ReadableAPI.updateCommentsVoteScore(id,'downVote')
      dispatch(updateComment(id))
    }

    deleteComment = (e, id) => {
      const { dispatch, comment } = this.props

     console.log(comment.parentId)
     ReadableAPI.deleteComment(id)
     dispatch(fetchCommentsPerPost(comment.parentId))

    }


    render() {
        const { comment} = this.props


        return (
            <div>

              <div className='comment'>
                <div className='post-header'>
                  {comment.author} on   {Utils.epochToDateTime(comment.timestamp)}
                </div>
                <div className='comment-body'>
                  {comment.body}
                </div>
                <div>
                  <Toolbar
                    comment={comment}
                    deleteComment={this.deleteComment}
                    downVote={this.downVote}
                    upVote={this.upVote}
                    parentId={comment.parentId}
                    id={comment.id}
                    score={comment.voteScore} />
                  </div>


              </div>



            </div>

        )
    }
}

const mapStateToProps = ({commentsReducer}) => ({commentsReducer})

export default connect(mapStateToProps)(Comments)
