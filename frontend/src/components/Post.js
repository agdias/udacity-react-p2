import React from 'react'
import thumb_up from '../assets/icons/thumb_up.svg'
import thumb_down from '../assets/icons/thumb_down.svg'
import { connect } from 'react-redux'
import comment from '../assets/icons/comment.svg'
import { Link } from 'react-router-dom'
import { fetchCommentsByPost } from '../assets/actions';


class Post extends React.Component {

  componentDidMount() {
    const { dispatch, post } = this.props

    dispatch(fetchCommentsByPost(post.id))

  }

  componentDidUpdate(prevProps) {
   const { dispatch, post } = this.props
    // prevProps.post.id !== post.id && dispatch(fetchCommentsByPost(post.id))
    prevProps.post !== post &&  dispatch(fetchCommentsByPost(post.id))
  }


    render() {
        const { post, comments } = this.props

        const showingComments = Object.values(comments.comments)

        return (
          <div>
            <div className='post'>
              <div className='post-header'>
                 <strong>{post.category}</strong> Posted by {post.author} @ { post.timestamp }
              </div>
              <div className='post-title'>
                {post.title}
              </div>
              <div className='post-body'>
                {post.body}
              </div>
              <div className='post-actions'>

                <div className='comments'>
                  <Link to={
                    {
                      pathname: `/${post.id}/comments`,
                      state: { postid: post.id }
                    }
                  }
                  >
                    <img alt='comments' src={comment} />
                 </Link>
                 {post.commentCount}
                </div>
                <div className='post-like'>
                   <img   alt='thumb_up' src={thumb_up} />
                </div>
                <div className='post-score'>
                  {post.voteScore}
                </div>
                <div className='post-like'>
                   <img  alt='thumb_down' src={thumb_down} />
                </div>

              </div>

          </div>

        </div>

        )
    }
}

const mapStateToProps = (comments) => {
  return ({
    comments
  })
}

export default connect(mapStateToProps)(Post)