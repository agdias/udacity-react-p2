import React, {Component} from 'react';
import { Link }from 'react-router-dom'
import { connect } from 'react-redux'

import * as ReadableAPI from '../utils/ReadableAPI'
import { fetchPosts, updatePost } from '../assets/actions';


class Post extends Component {

    state = {
        collapsed: false
    }

    epochToDateTime(timestamp) {
        const dateObject = new Date(timestamp)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const  day = dateObject.getUTCDate()
        return `${day}.${month}.${year}`
      }

      upVote = (id) => {

          const { dispatch } = this.props
          ReadableAPI.updateVoteScore(id, 'upVote')
          dispatch(updatePost(id))

      }
      downVote = (id) => {

        const { dispatch } = this.props
        ReadableAPI.updateVoteScore(id, 'downVote')
        dispatch(updatePost(id))

    }
    onDelete = (e,id) => {
        const { dispatch } = this.props
        console.log('*** delete ***', id)
        ReadableAPI.deletePost(id)
        dispatch(fetchPosts())
    }







    render() {
       const { post } = this.props;


        return (
           <div>
                <div className='post'>
                    <div>
                        <ul>
                            <li className='post-header'>
                                <strong>{post.category}</strong> - Posted by {post.author} on {this.epochToDateTime(post.timestamp)}
                            </li>
                            <li className='post-title'>
                                {post.title}
                            </li>
                            <li className='post-body'>
                                {post.body}
                            </li>
                        </ul>
                    </div>
                    <div className='post-footer'>
                    <div>
                        <ul className='score'>
                            <li>
                                <Link   to={{
                                            pathname: '/postdetails',
                                            state: { id: post.id }
                                        }}
                                >
                                 {post.commentCount} comments
                                </Link>

                            </li>
                            <li>
                            <label onClick={(e) => this.upVote(post.id,e)}>like</label>
                            </li>
                            <li>
                                {post.voteScore}
                            </li>
                            <li>
                            <label onClick={(e) => this.downVote(post.id,e)}>dislike</label>
                            </li>
                            <li>
                                <Link to= {{
                                        pathname: '/postedit',
                                        state: {id: post.id}
                                    }}
                                >
                                edit
                                </Link>
                            </li>
                            <li onClick={e => this.onDelete(e,post.id)}>
                            <label>delete</label>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>


        </div>



            )
        }
    }

const mapStateToProps = ({postsReducer}) => ({postsReducer});
export default connect (mapStateToProps)(Post);
// export default Post;