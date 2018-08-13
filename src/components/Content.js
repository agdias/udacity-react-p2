import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import Post from './Post'

class Content extends React.Component {

    componentDidMount() {
        const { dispatch }  = this.props;
       dispatch(fetchPosts())
    }
    render() {
        const { posts } = this.props
       
        return (
            <div className='posts'>


            </div>
        )

    }
}

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(Content);
