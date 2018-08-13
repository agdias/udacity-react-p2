
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './Post';
import sortBy from 'sort-by'


class Posts extends React.Component {

    componentDidMount() {
        const { dispatch }  = this.props;
       dispatch(fetchPosts())
    }

    render() {

       const { posts } = this.props;
       const showingPosts = Object.values(posts)
       showingPosts.sort(sortBy('-voteScore'))

        return (
            <div className="posts">

             {showingPosts.map((post) => {
                return (
                    <Post key={post.id} post={post} />
                )

           })}
            </div>

        )
    }
}


const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(Posts);