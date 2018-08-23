import React from 'react'
import { connect } from 'react-redux'
import { fetchCommentsByPost } from '../assets/actions';
import face from '../assets/icons/face.svg'
import chat from '../assets/icons/chat.svg'


import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import Thumb_Up from '@material-ui/icons/ThumbUpOutlined'
import Thumb_Down from '@material-ui/icons/ThumbDownOutlined'
import AddComment from '@material-ui/icons/AddCommentOutlined'
import Reply from '@material-ui/icons/Reply'





class Comment extends React.Component {

    componentDidMount() {
        const { dispatch, comment} = this.props
        const { postid } = this.props.location.state
        dispatch(fetchCommentsByPost(postid))

    }


    componentDidUpdate(prevProps) {
        const { dispatch } = this.props
        const { postid } = this.props.location.state
    }

       
      


    
   
    render() {
     
       const { state, comment, commentCount } = this.props
        
       return(
            <div className='comment'>
              <div >
                <img   src={chat} />
              </div>
              <div className='comment-body'>
                <div className='comment-text'>{comment.body}</div>
                <div className='comment-author'>Posted by {comment.author} @ {comment.timestamp}</div>
              </div>
              <div className='comment-actions'>
                <IconButton >
                  <Thumb_Up />
                </IconButton>
                <IconButton >
                  <Thumb_Down />
                </IconButton>
                <IconButton >
                 <Reply />
                </IconButton>
                  <IconButton >
                <DeleteIcon />
                </IconButton>
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


export default connect(mapStateToProps)(Comment)