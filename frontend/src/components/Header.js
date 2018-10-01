import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../assets/actions';
import { Link  } from 'react-router-dom'

class Header extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories());
    }

    render() {
        const { categoryReducer } = this.props;
        const showingCategories = Object.values(categoryReducer);


        return (
          <div className='header'>
            <div className='header-top'>
              <div className='logo'><Link to='/'>readable</Link></div>
              <div className='category-menu'>
                <ul>
                  <li><Link to='/'>home</Link></li>
                  {(showingCategories.length > 0) &&
                    showingCategories.map((category) => {
                        return (
                            <li key={category.name}>
                               <Link to={`/${category.name}/posts`}>  {category.name} </Link>
                           </li>
                        )
                    })
                  }
                </ul>
              </div>
              <div className='sort-menu'>
                <ul>

                 <li className='create-post'><Link to='/create-post'> post</Link></li>

                </ul>
              </div>

            </div>
          </div>


        )
    }
}
const mapStateToProps = ({categoryReducer}) => ({categoryReducer})

export default connect(mapStateToProps)(Header);