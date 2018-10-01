import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Toolbar extends Component {


  onHandleEdit = (prevState) => {

      this.setState((prevState) => {
          return {
            visible: !prevState.visible
          }

      })
      console.log(this.state.visible)
  }



    render() {

        const {comment, deleteComment,downVote, id, score, upVote,  } = this.props

        return (
            <div>
              <div className='toolbar'>
                <ul>

                  <li onClick={e => upVote(e,id)}>like</li>
                  <li>{score}</li>
                  <li onClick={e => downVote(e,id)} >dislike</li>
                  <li>
                    <Link to= {{
                                pathname: '/commentEdit',
                                state: {comment: comment}
                               }}
                    >
                      edit
                    </Link>
                  </li>
                  <li  onClick={e => deleteComment(e,id)}>delete</li>
                </ul>
              </div>

          </div>
        )
    }
}

export default Toolbar;

