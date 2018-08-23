import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions'
import Post from './Post'
import sortBy from 'sort-by'

class Posts extends React.Component {


    componentDidMount() {

        const { dispatch } = this.props
        dispatch(fetchPosts());

    }

    getAvatar = () => {
      const randomNumber = Math.floor(Math.random() * Math.floor(3));
      return randomNumber;
    }

    render() {
       console.log('avatar',this.getAvatar());
       const { posts } = this.props
       const showingPosts = Object.values(posts.posts)
       showingPosts.sort(sortBy('-voteScore'))

        return (
            <div>
                <div className='posts'>

                    {showingPosts.length > 0 ?

                    showingPosts.map((post) => {
                        return (
                            <Post key={post.id} post={post} />

                        )
                    }) :
                    <p> There aren't no posts yet. Posts </p>
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (posts) => {

    return ({
        posts
    })
}


export default  connect(mapStateToProps)(Posts)