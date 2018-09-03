import React, { Component } from 'react'
import { Col, PageHeader, Row, Navbar, Nav, NavItem } from 'react-bootstrap'
import  { connect }  from 'react-redux'
import { fetchCategories } from '../assets/actions';
import AlertDismissable from '../components/AlertDismissable'
import Button from 'react-bootstrap'

class Header extends Component {

    componentDidMount() {
        const {  dispatch  } = this.props
        dispatch(fetchCategories())
    }

    render() {

        const { categories, } = this.props
        const showingCategories = Object.values(categories)
        
        
        return (
            <div>
                <Row >
                    <Col md={12}>
                        <PageHeader>readable tech talks</PageHeader>
                        </Col>
                </Row>
              
                <Row>
                    <Col md={12}>
                        <Navbar >
                       
                        <Nav>
                            {showingCategories.length > 0 &&
                            showingCategories.map((category) => {
                                return (
                                    <NavItem key={category.name}>{category.name}</NavItem>
                                )
                            })
                        
                          }
                        </Nav>

                        </Navbar>
                    </Col>

                </Row>
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => ({categories})

export default connect(mapStateToProps)(Header)