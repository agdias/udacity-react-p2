import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../assets/actions'
import sortBy from 'sort-by'

import * as ReadableAPI from '../utils/ReadableAPI'




class CreatePost extends Component {

    state  = {
            author: null,
            id:null,
            timestamp: null,
            title:null,
            body:null,
            category: 'Select a category...'
    }

componentDidMount() {
  const { dispatch } = this.props
  dispatch(fetchCategories())
}

handleInputChange = (event) => {
  const target = event.target
  const value = target.value
  const name = target.name;
  this.setState({
    [name]: value
  })

}

onChangeHandler(newcategory) {
  this.setState({category:newcategory})
  console.log(newcategory)
}

genUUID = () => {
  const uuid = require('uuid/v1')
  const id = uuid().split('-')
  return id[0]

}

onSubmitHandler = (event) => {


  event.preventDefault()
  const id = this.genUUID()
  const timestamp = Date.now()
  const post = {
    author: this.state.author,
    id: id,
    timestamp: timestamp,
    title: this.state.title,
    body: this.state.body,
    category: this.state.category
  }
  ReadableAPI.createPost(post)
  this.props.history.push('/')


}



    render() {
        const { categoryReducer } = this.props
        const showingCategories = Object.values(categoryReducer)
        showingCategories.sort(sortBy('voteScore'))
        // showingCategories.sort(sortBy('name'))


        return (
            <div>
               <Link className='close-create-post' to='/'></Link>
               <form  onSubmit={this.onSubmitHandler} className='create-post-form'>
                    <div className='create-post-details'>
                            <select
                              onChange={event => this.onChangeHandler(event.target.value)}
                              name='category'
                              defaultValue={this.state.category}
                            >
                              <option  disabled >Select a category...</option>
                                {showingCategories.length > 0 &&
                                  showingCategories.map((category) => {
                                      return (
                                        <option  key={category.name} value={category.name}>{category.name}</option>
                                      )
                                  })
                                }
                            </select>
                            <input type='text' name='author' placeholder='Author' onChange={this.handleInputChange} />
                            <input type='text' name='title' placeholder='Title' onChange={this.handleInputChange} />
                            <input type='text' name='body' placeholder='Text' onChange={this.handleInputChange} />
                            <button> Post </button>
                    </div>
               </form>
            </div>
        )

    }
}
const mapStateToProps = ({categoryReducer}) => ({categoryReducer})

export default connect (mapStateToProps)(CreatePost)