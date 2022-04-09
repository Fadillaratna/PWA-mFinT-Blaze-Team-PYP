import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Cover extends Component {
    render() {
        return (
            <div className='con-1'>
                <br />
                <div className="ms-4">
                    <img src="/assets/mFinT.png" alt="" className='mb-3' id="fin-con" />
                    <h2 className='header-cover mt-5 mb-2'>Improve your financial management</h2>
                    <h3 className='desc-cover me-5'>Easy way to help control your financial. You can reach financial goal.</h3>
                </div>
                <NavLink to="/signup" className="a"><button className='mx-auto d-block mb-3' id="get-start">Getting Started</button></NavLink>
                <h5 className='already'>Already have an account? <NavLink to="/login" className="a"><b className='login'>Sign In</b></NavLink></h5>
            </div>
        )
    }
}
