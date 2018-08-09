import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class Content extends React.Component {

    componentDidMount() {
        const { posts, dispatch }  = this.props;
        this.props.dispatch(fetchPosts())
    }
    render() {
        const { posts } = this.props
        return (
            <div className='content-wrapper'>
                <div className='posts'>
                  {posts.length > 0 && posts.map(post => <p>{post}</p>)}
                </div>
                <div className='ads'></div>
            </div>
        )

    }
}

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(Content);
