import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../assets/actions'
import * as Utils  from '../utils/Utils'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import * as ReadableAPI from '../utils/ReadableAPI'
import { fetchCommentsPerPost } from '../assets/actions'
import sortBy from 'sort-by'



class PostDetail extends Component {

    state = {
        author: null,
        body: null
    }

    componentDidMount() {

        const { dispatch, location } = this.props
        dispatch(fetchPostById(location.state.id))
        dispatch(fetchCommentsPerPost(location.state.id))
    }



    upVote = (id) => {

        const { dispatch } = this.props
        console.log('upvote')
        ReadableAPI.updateVoteScore(id, 'upVote')
        dispatch(fetchPostById(id))

    }
    downVote = (id) => {
      const { dispatch } = this.props

      ReadableAPI.updateVoteScore(id, 'downVote')
      dispatch(fetchPostById(id))
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        this.setState({
          [name]: value
        })

      }

      onSubmitHandler = (event) => {
        const { id } = this.props.location.state
        const { dispatch } = this.props
        event.preventDefault()
        const commentId = Utils.genUUID()
        const comment = {
            id: commentId,
            parentId: id,
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            voteScore: -1,
            deleted: false,
            parentDeleted:false
        }

          ReadableAPI.createComment(comment)
          dispatch(fetchCommentsPerPost(id))
          dispatch(fetchPostById(id))
      }

      onPostDelete = (e, id) => {
          const { dispatch } = this.props
          ReadableAPI.deletePost(id)
          dispatch(fetchPostById(id))
          this.props.history.push('/')
      }



    render() {
        const { commentsReducer, postsReducer } = this.props
        const showingComments = Object.values(commentsReducer)
        showingComments.sort(sortBy('-voteScore'))






        return (

           <div className='detail'>

            <div className='post-detail-header'>
              {postsReducer.title}
            </div>

            <div>
                <ul>
                    <li className='post-header'>
                        <strong>{postsReducer.category}</strong> - Posted by {postsReducer.author} on {Utils.epochToDateTime(postsReducer.timestamp)}
                    </li>
                    <li className='post-body'>
                        {postsReducer.body}
                    </li>
              </ul>
            </div>
            <div className='post-footer'>
              <ul className='score'>
                <li>{postsReducer.commentCount}</li> comments
                <li>
                    <label onClick={(e) => this.upVote(postsReducer.id,e)}>like</label>
                </li>
                <li>
                  {postsReducer.voteScore}
                </li>
                <li>
                  <label onClick={(e) => this.downVote(postsReducer.id,e)}>dislike</label>
                </li>
                <li>
                                <Link to= {{
                                        pathname: '/postedit',
                                        state: {id: postsReducer.id}
                                    }}
                                >
                                edit
                                </Link>
                </li>
                <li onClick={e => this.onPostDelete(e,postsReducer.id)}>
                    <label>delete</label>
                </li>
              </ul>

            </div>

            <div>
              <form className='create-comment-form' onSubmit={this.onSubmitHandler}>
                <input onChange={this.handleInputChange} type='text' placeholder='author' name='author'></input>
                <input onChange={this.handleInputChange} type='text' placeholder='comment' name='body'></input>
                 <button >Send</button>
              </form>



              </div>
             <ul>
                 {showingComments.length > 0 &&
                  showingComments.map((comment) => {
                      return (
                          <li className='comments' key={comment.id}><Comments comment={comment}/></li>
                      )
                  })
                 }
             </ul>

           </div>
        )
    }
}

const mapStateToProps = ({postsReducer, commentsReducer}) => ({
    postsReducer,
    commentsReducer
})




export default connect(mapStateToProps)(PostDetail);