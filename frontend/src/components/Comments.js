import React from 'react'
import { connect } from 'react-redux'
import { fetchCommentsByPost } from '../assets/actions';
import { TextField } from '@material-ui/core'

class Comments extends React.Component {

    componentDidMount() {
        const { dispatch, comment} = this.props
        const { postid } = this.props.location.state
        dispatch(fetchCommentsByPost(postid))

    }


    componentDidUpdate(prevProps) {
        const { dispatch } = this.props
        const { postid , postTitle} = this.props.location.state
    }
    

    render() {
        const { postid , postTitle} = this.props.location.state
        const { comment } = this.props
      
       
       
        return (

            <div className='comments'>
              
                <div className='comment-header'>
                  {postTitle}
                </div>
                <div className='comments-body'>
                    <div className='create-comment'>
                        <form className='create-comment-form'>
                            <div className='create-comment-details'>
                                <TextField
                                    id="author"
                                    label="author"
                                    fullWidth="true"
                                />
                                <TextField
                                    id="comment"
                                    label="comment"
                                    fullWidth="true"
                                />
                            </div>
                        </form>
        
                    </div>
            </div>
        </div>

        )
    }
}
const mapStateToProps = (comments) => {
    return ({
        comments
    })
}


export default connect(mapStateToProps)(Comments)