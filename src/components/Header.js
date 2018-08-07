import React , { Component } from 'react'
import capitalize from 'capitalize-first-letter'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'

class Header extends React.Component {



  componentDidMount() {
      const { categories, dispatch } = this.props
      dispatch(fetchCategories());
  }

   render() {
     
     return (
         <div className="header">
          <div className="logo">readable</div>
            <div className="categories">
             <select>



             </select>
            </div>
          </div>
     )
   }
 }

 const mapStateToProps = ({categories}) => ({categories})





 export default  connect(mapStateToProps)(Header);
