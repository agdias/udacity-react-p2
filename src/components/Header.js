import React  from 'react'
import capitalize from 'capitalize-first-letter'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../actions'
import select  from '@material/select'



class Header extends React.Component {

   componentDidMount() {

     const { dispatch } = this.props
     dispatch(fetchCategories());
   }

   render() {

     const { categories } = this.props;


     return (
        <div>
            <div className='inner__header'>

                <svg  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24">
                  <path className="logo" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                </svg>

              <div className="title">readable tech talks</div>
              <div className='mdc-select mdc-select--box '>
                <select className='mdc-select__native-control'>
                  <option value='all'>Home</option>
                  {(Object.values(categories).length > 0) && Object.values(categories).map((category) => {
                    return (
                      <option key={category.name}  value={category.name}>{category.name}</option>

                    )
                  })}
                  </select>
              </div>
            </div>
            <div >
              <div className="menu-bar">
              </div>
            </div>
        </div>
     )
  }
 }

 const mapStateToProps = ({categories}) => ({categories});

 export default  connect(mapStateToProps)(Header);

