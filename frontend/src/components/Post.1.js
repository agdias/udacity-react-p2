import React, { Component } from 'react'
import {  Button, ButtonGroup,Glyphicon,OverlayTrigger,Panel, Tooltip  } from 'react-bootstrap'

class Post extends Component {

    epochToDateTime(timestamp) {
        const dateObject = new Date(timestamp)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const  day = dateObject.getUTCDate()
        return `${day}/${month}/${year}`
      }
      
   
    

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
              <Panel>
                 <Panel.Heading><h4>{post.title}</h4> </Panel.Heading>
                 <Panel.Body>

                 <p>{post.body}</p>
                  
                   <ButtonGroup>
                      <OverlayTrigger  placement='left' overlay={commentTip}>
                         <Button tooltiptext='test'><Glyphicon glyph="comment" /> {post.commentCount}</Button>
                      </OverlayTrigger>
                      <OverlayTrigger  placement='bottom' overlay={thumbUpTip}>
                         <Button ><Glyphicon glyph="thumbs-up" /></Button>
                      </OverlayTrigger>
                      <OverlayTrigger  placement='bottom' overlay={scoreTip}>
                       <Button> <Glyphicon glyph="transfer" />{post.voteScore}</Button>
                      </OverlayTrigger>
                    
                      <OverlayTrigger  placement='bottom' overlay={thumbDownTip}>
                        <Button > <Glyphicon glyph="thumbs-down" /></Button>
                      </OverlayTrigger>
                     <OverlayTrigger  placement='bottom' overlay={deleteTip}>
                       <Button > <Glyphicon glyph="trash" /></Button>
                     </OverlayTrigger>
                    
                     <OverlayTrigger  placement='right' overlay={editTip}>
                       <Button > <Glyphicon glyph="edit" /></Button>
                     </OverlayTrigger>

                   </ButtonGroup>
                   <p className='post-footer'> Posted by {post.author} on {this.epochToDateTime(post.timestamp)} </p>
                  
                 </Panel.Body>
              </Panel>
            </div>

        )

    }
}

export default Post