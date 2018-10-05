
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Button,
  Col,
  Glyphicon,
  Row
} from 'react-bootstrap'

import * as Utils from '../utils/Utils'
import * as ReadableAPI from '../utils/ReadableAPI'
import  { fetchCommentsPerPost,fetchPostById, updateComment }   from '../assets/flow/actions/'


// import * as ReadableAPI from '../utils/ReadableAPI';
// import { updateComment, fetchCommentsPerPost} from '../assets/actions'



class Comments extends Component {

  // componentDidUpdate(prevProps) {
  //   const { dispatch,location } = this.props
  //   const { id } = location.state
  //   prevProps.id !== id &&
  //     dispatch(fetchCommentsPerPost(id))
  // }

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
     dispatch(fetchPostById(comment.parentId))

    }


    render() {
        const { comment} = this.props


        return (
          <Row>
            <Col md={12}>
              <div className="comment">
                <div className="comment-header">
                  <p className="comment-note"> Commented by {comment.author} on {Utils.epochToDateTime(comment.timestamp)}</p>
                  {comment.body}
                </div>
              </div>
              <div>
                  <ul className="post-footer">

                  <li>
                    <Button onClick={e => this.upVote(e, comment.id)}>
                      <Glyphicon glyph="thumbs-up" />
                    </Button>
                  </li>
                  <li>
                    <Button disabled>
                      {comment.voteScore}
                    </Button>
                  </li>
                  <li>
                    <Button onClick={e => this.downVote(e, comment.id)}>
                      <Glyphicon glyph="thumbs-down" />
                    </Button>
                  </li>

                  <li>
                    <Button >
                      <Link to={{
                                pathname: "/editcomment",
                                state: {comment:comment}
                               }}
                      >
                       <Glyphicon glyph="edit" />
                      </Link>



                    </Button>
                  </li>

                <li>
                    <Button onClick = {e => this.deleteComment(e,comment.id)}>
                      <Glyphicon glyph="trash" />
                    </Button>
                </li>

                </ul>
              </div>

            </Col>
          </Row>


        )
    }
}

const mapStateToProps = ({commentsReducer}) => ({commentsReducer})

export default connect(mapStateToProps)(Comments)
