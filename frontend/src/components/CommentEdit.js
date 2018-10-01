import React , { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'


class CommentEdit extends Component {

    state = {
        body: null
    }

    onSubmitHandler = (event) => {
       const { comment } = this.props.location.state
       const { push } = this.props.history


       event.preventDefault()

        const comment_updated = {
            id: comment.id,
            parentId: comment.parentId,
            timestamp: comment.timestamp,
            body: this.state.body,
            author: comment.author,
            voteScore: comment.voteScore,
            deleted: comment.deleted,
            parentDeleted: comment.parentDeleted
        }

      ReadableAPI.editComment(comment.id, comment_updated)
      push('/')


    }

    handleInputChange = (event) => {

        const name = event.target.name
        const value = event.target.value


        this.setState({
            [name]: value
        })
      }

    render() {
       const {  comment } = this.props.location.state



        return (
        <div>
           <form className='edit-comment-form' onSubmit={this.onSubmitHandler}>

                <input
                  defaultValue={comment.body}
                  onChange={this.handleInputChange}
                  type='text'
                  placeholder='comment'
                  name='body'>
                </input>
                <button>
                    update
                </button>

              </form>
        </div>)
    }
}

export default CommentEdit