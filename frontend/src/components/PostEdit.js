import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPostById } from '../assets/actions'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostEdit extends Component {

    state = {
        title: null,
        body: null
    }

    componentDidMount() {
        const { dispatch, location} = this.props
        const { id } = location.state

         dispatch(fetchPostById(id))
    }

     componentDidUpdate(prevProps) {

        const { dispatch, location } = this.props
        const { id } = location.state

        prevProps.location.state.id !== id &&
        dispatch(fetchPostById(id))

    }

    getPostById = id => ReadableAPI.getPostById(id).then(data => data)



    onSubmitHandler = (event) => {

      const { postsReducer } = this.props.state
      const { id } = this.props.location.state
      let body
      let title

      this.state.body === null ? body = postsReducer.body : body = this.state.body
      this.state.title === null ? title = postsReducer.title : title = this.state.title
      let post = {

          author: postsReducer.author,
          body: body,
          category: postsReducer.category,
          commentCount: postsReducer.commentCount,
          deleted: postsReducer.deleted,
          id: postsReducer.id,
          title: title,
          voteScore: postsReducer.voteScore

      }

        event.preventDefault()
        ReadableAPI.editPost(id,post)
        this.props.history.push('/')
    }

    handleInputChange = (event) => {

        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })


      }


    render() {


        const { postsReducer } = this.props.state
        console.log('state',this.state)

        return (

            <div className='edit-post-form'>

                <form   onSubmit={this.onSubmitHandler} className='create-post-form'>
                  <ul>
                      <li>
                       <input

                         size='900'
                         defaultValue={postsReducer.title}
                         type='text'
                         name='title'
                         placeholder='Title'
                         onChange={this.handleInputChange}
                       />
                      </li>
                      <li>
                       <input  size='900' defaultValue={postsReducer.body} type='text' name='body' placeholder='Text' onChange={this.handleInputChange} />
                      </li>
                      <li>

                      <button> Update </button>
                      </li>
                  </ul>
                </form>

            </div>



        )
    }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(PostEdit)