import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../assets/actions';
// import calendar from '../assets/icons/calendar.svg'
// import score from '../assets/icons/score.svg'

class Header extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCategories())
    }
    render() {
        const { categories } = this.props
        return (
            <div>
                <header className="app-header">
                <Link to='/'>
                    <div className="logo">
                    <svg  xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24">
                        <path className="logo" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                    </svg>
                    </div>
                </Link>
                    <div className="title">
                    <h2> readable talk about </h2>
                    </div>
                </header>
                <div className="sub-header">
                    <div className="menu-bar">
                        <ul>
                            <li> <Link to="/">home</Link></li>
                            {Object.values(categories).map((category) => {
                            return (
                                <li key={category.name}>
                                <Link to={`/${category.name}/posts`}>  {category.name} </Link>
                                </li>
                            )
                            })}
                        </ul>

                        {/* <div className='menu-icon'><img src={calendar}/></div>
                        <div classname='menu-icon'><img src={score}/></div> */}

                    </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => ({categories})
export default connect(mapStateToProps)(Header)