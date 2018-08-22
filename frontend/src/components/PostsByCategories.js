import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsByCategory } from '../assets/actions';
import Post from './Post'

class PostsByCategories extends React.Component {

    componentDidMount() {
        const { dispatch, match  } = this.props
        dispatch(fetchPostsByCategory(match.params.category));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, match } = this.props
         if (match.params.category !== prevProps.match.params.category) {
            dispatch(fetchPostsByCategory(match.params.category))
         }
    }

    render() {

        const { posts } = this.props

        return (
            <div>
                <div className='posts'>

                    {Object.values(posts.posts).length > 0 ?

                     Object.values(posts.posts).map((post) => {
                         return (
                             <Post key={post.id} post={post} />

                         )
                     }) :
                     <p> There aren't no posts yet. Be the first to publish </p>
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

export default  connect(mapStateToProps)(PostsByCategories)