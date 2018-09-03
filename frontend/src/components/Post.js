import React, { Component } from 'react'
import {  Alert, Button, ButtonGroup,Glyphicon, Image,OverlayTrigger,Panel, Tooltip  } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as ReadableAPI from '../assets/apis/ReadableAPI'
import { updatePostAction} from '../assets/actions';

class Post extends Component {

    componentDidMount() {
        const { dispatch, id } = this.props
    }

    epochToDateTime(timestamp) {
        const dateObject = new Date(timestamp)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const  day = dateObject.getUTCDate()
        return `${day}/${month}/${year}`
      }
      
   
 handleUpVote = () => {
    
    const { dispatch, post,id} = this.props
    ReadableAPI.updateVoteScore(post.id, 'upVote')
    dispatch(updatePostAction(post))

 }
    
     

 



 handleDownVote = id => ReadableAPI.updateVoteScore(this.props.id, 'downVote')

    render() {
       

        const deleteTip = (
            <Tooltip id="Delete">
             Throw away
            </Tooltip>
         )
         const thumbUpTip = (
            <Tooltip id="Like">
             Like
            </Tooltip>
         )
         const scoreTip = (
            <Tooltip id="Dislike">
              Score
            </Tooltip>
         )
         const thumbDownTip = (
            <Tooltip id="dislike">
              Don't like
            </Tooltip>
         )
         const commentTip = (
            <Tooltip id="comments">
             Comments
            </Tooltip>
         )
         const editTip = (
            <Tooltip id="edit">
             Edit 
            </Tooltip>
         )

        const { post } = this.props
        return (
            <div className='post'>
              <div className='post-header'>
               <div className='post-avatar'><Glyphicon glyph="user" /></div>
               <div className='post-user'>{post.author} on   {this.epochToDateTime(post.timestamp)} about <strong>{post.category}</strong></div>
               
              </div>
              <div className='post-title'><strong>{post.title}</strong></div>
              <div className='post-body'>
                    
                        <p>{post.body}</p>
                        
                        <ButtonGroup>
                            <OverlayTrigger  placement='left' overlay={commentTip}>
                                <Button tooltiptext='test'><Glyphicon glyph="comment" /> {post.commentCount}</Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement='bottom' overlay={thumbUpTip}>
                                <Button onClick={this.handleUpVote} ><Glyphicon glyph="thumbs-up" /></Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement='bottom' overlay={scoreTip}>
                            <Button> <Glyphicon glyph="transfer" />{post.voteScore}</Button>
                            </OverlayTrigger>
                            
                            <OverlayTrigger  placement='bottom' overlay={thumbDownTip}>
                                <Button onClick={this.handleDownVote} > <Glyphicon glyph="thumbs-down" /></Button>
                            </OverlayTrigger>
                            <OverlayTrigger  placement='bottom' overlay={deleteTip}>
                            <Button > <Glyphicon glyph="trash" /></Button>
                            </OverlayTrigger>
                            
                            <OverlayTrigger  placement='right' overlay={editTip}>
                            <Button > <Glyphicon glyph="edit" /></Button>
                            </OverlayTrigger>

                        </ButtonGroup>
                       
                        
                   
                </div>
        </div>

        )

    }
}

const mapStateToProps = ({posts}) => {(posts)}
// const mapDispatchToProps =

export default connect(mapStateToProps)(Post)