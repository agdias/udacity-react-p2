import React from 'react'
import thumb_up from '../assets/icons/thumb_up.svg'
import thumb_down from '../assets/icons/thumb_down.svg'
import { connect } from 'react-redux'
import comment from '../assets/icons/comment.svg'
import { Link } from 'react-router-dom'
import { fetchCommentsByPost } from '../assets/actions';
import Comment from './Comment'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import Thumb_Up from '@material-ui/icons/ThumbUpOutlined'

import Thumb_Down from '@material-ui/icons/ThumbDownOutlined'
import AddComment from '@material-ui/icons/AddCommentOutlined'
import Chat from '@material-ui/icons/ChatOutlined'
import Score from '@material-ui/icons/ScoreOutlined'
import Badge from '@material-ui/core/Badge'
import { TextField } from '../../node_modules/@material-ui/core';



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

              <IconButton >
                <Thumb_Up />
              </IconButton>
              <Badge color='secondary' badgeContent={post.voteScore} >
                <IconButton >
                 <Score />
                </IconButton>
              </Badge>

              <IconButton >
                <Thumb_Down />
              </IconButton>
              <Link to={
                      {
                        pathname: `/${post.id}/comments`,
                        state: { postid: post.id , postTitle: post.title}
                      }
                    }
              >
                
                <Badge color='secondary' badgeContent={post.commentCount} >
                  <IconButton >
                  <Chat/>
                  </IconButton>
                </Badge>
              </Link>
             <IconButton >
              < DeleteIcon />
             </IconButton>

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