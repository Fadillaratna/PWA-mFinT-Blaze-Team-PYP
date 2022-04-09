import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="max-w-screen-sm">
                <Navbar className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-black py-3 max-w-screen-sm nav">
                    <Container>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/"><i className="fa fa-home" id="icon-nav"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products"><i className="fa fa-signal" id="icon-nav"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gallery"><i className="fa fa-bell" id="icon-nav"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/account"><i className="fa fa-user-circle" id="icon-nav"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
