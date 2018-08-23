import React from 'react'
import { connect } from 'react-redux'
import { fetchCommentsByPost } from '../assets/actions';
import face from '../assets/icons/face.svg'
import chat from '../assets/icons/chat.svg'
import thumb_up from '../assets/icons/thumb_up.svg'
import thumb_down from '../assets/icons/thumb_down.svg'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import Thumb_Up from '@material-ui/icons/ThumbUpOutlined'
import Thumb_Down from '@material-ui/icons/ThumbDownOutlined'
import Edit from '@material-ui/icons/EditOutlined'





class Comment extends React.Component {

    // componentDidMount() {
    //     const { dispatch, comment} = this.props
    //     // const { postid } = this.props.location.state
    //     dispatch(fetchCommentsByPost(postid))

    // }


    // componentDidUpdate(prevProps) EditOutlined
    //     const { dispatch, postid } = this.props
    //     // const { postid } = this.props.location.state


    // }
   
    render() {
     
       const { comment, commentCount } = this.props
        
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
               <Edit />
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