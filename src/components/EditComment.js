import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import {
    Row,
    Col
} from 'react-bootstrap'

class EditComment extends Component {

    state = {
        body: null
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (event) => {
        const { comment } = this.props.location.state
        const { push, goBack } = this.props.history
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
         goBack()

       }




    render() {

        const { comment } = this.props.location.state
        return(
          <div>
            <Row>
               <Col md={6}>
                  <h4 className="post-edit-title"> Comment Edit </h4>
                </Col>
            </Row>
            <Row>
                <form className="create-comment-form" onSubmit={this.onSubmitHandler}>
                <input
                    onChange = {this.handleInputChange}
                    defaultValue={comment.body}
                    type='text'
                    placeholder='comment'
                    name='body'>
                </input>
                    <button type="submit">
                        update
                    </button>

                </form>
            </Row>


        </div>)
    }
}

export default EditComment