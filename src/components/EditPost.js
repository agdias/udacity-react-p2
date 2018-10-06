import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Row,

} from 'react-bootstrap'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostEdit extends Component {

  state = {
    title: null,
    body: null
  }

  onSubmitHandler = (event) => {
    const { post } = this.props.location.state

    const { id } = this.props.location.state
    let body
    let title

    this.state.body === null ? body = post.body : body = this.state.body
    this.state.title === null ? title = post.title : title = this.state.title

    event.preventDefault()

    let newPost = {

        author: post.author,
        body: body,
        category: post.category,
        commentCount: post.commentCount,
        deleted: post.deleted,
        id: post.id,
        title: title,
        voteScore: post.voteScore

    }

      event.preventDefault()

      ReadableAPI.editPost(id,newPost)

      this.props.history.goBack()
  }


  handleInputChange = (event) => {
      console.log('handleInputChange fired')
      const name = event.target.name
      const value = event.target.value
      this.setState({
          [name]: value
      })

  }

    render() {

      const { post } = this.props.location.state

        return(
            <div className="posts">
              <Row>
              <Col md={6}>
                <h4 className="post-edit-title"> Post Edit </h4>
              </Col>
              </Row>
              <Row>
                <Col md={12}>

                  <form className='create-comment-form' onSubmit={this.onSubmitHandler}>
                      <input
                        onChange={this.handleInputChange}
                        defaultValue={post.title}
                        type='text'
                        placeholder='Title'
                        name='title'
                      >
                      </input>
                      <input
                        onChange={this.handleInputChange}
                        defaultValue={post.body}
                        type='text'
                        placeholder='Text'
                        name='body'
                      >
                      </input>

                      <Button
                        type="submit"
                        bsStyle="default"
                        bsSize="lg"
                        >
                          update
                        </Button>
                  </form>
                </Col>
              </Row>
            </div>
        )

    }
}

const mapStateToProps = ({posts}) => ({posts})
export default connect(mapStateToProps)(PostEdit)
