import React from 'react'
import { connect } from 'react-redux'
import { fetchCommentsByPost } from '../assets/actions';

class Comment extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        const { postid } = this.props.location.state
        dispatch(fetchCommentsByPost(postid))

    }


    componentDidUpdate(prevProps) {
        const { dispatch } = this.props
        const { postid } = this.props.location.state


    }

    render() {

       const {postid} = this.props
       const { comments } = this.props.comments
       const showingComments = Object.values(comments)

       return(
            <div className='comments-box'>
             {showingComments.map((comment) => {
                 return (<div>{comment.body}</div>)
             })}

            </div>
       )







    }
}

const mapStateToProps = (comments) => {
    return ({
        comments
    })
}


export default connect(mapStateToProps)(Comment)