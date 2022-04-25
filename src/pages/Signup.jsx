import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default class Signup extends Component {
    render() {
        return (
            <div className='con-4'><br />
                <NavLink to="/cover" className="a"><BsArrowLeft id="left" size={25} className="ms-4" /></NavLink>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="card-sign"><br />
                    <div className="ms-5 me-5">
                        <h3 className='title-sign mb-4'>Sign Up</h3>
                        <div className="form-group mb-4 mt-4">
                            <label className='label-form'>Name</label>
                            <input type="text" name="" id="form" className='form-control' placeholder='Type your name here' value="Blaze Jhon" />
                        </div>
                        <div className="form-group mb-4">
                            <label className='label-form'>Email</label>
                            <input type="email" name="" id="form" className='form-control' placeholder='Type your email here' value="blazejh@gmail.com" />
                        </div>
                        <div className="form-group mb-4">
                            <label className='label-form'>Password</label>
                            <input type="password" name="" id="form" className='form-control' placeholder='Type your email here' value="blazenih" />
                        </div>
                        <NavLink to="/" className="a"><button className='mx-auto d-block mb-3' id="up">Sign Up</button></NavLink>
                        <h5 className='already-1'>Already have an account? <NavLink to="/login" className="a"><b className='sgn'>Sign In</b></NavLink></h5>
                    </div>
                </div>
            </div>
        )
    }
}
