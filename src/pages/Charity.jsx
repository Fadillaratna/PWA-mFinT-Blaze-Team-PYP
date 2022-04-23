import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillChatDotsFill, BsArrowLeft } from 'react-icons/bs'

export default class Charity extends Component {
    render() {
        return (
            <div className='con'><br /><br />
                <div className="row me-4 ms-4 mb-4">
                    <div className="col-2">
                        <NavLink className="a" to="/"><BsArrowLeft className='arrow-left' /></NavLink>
                    </div>
                    <div className="col-6">
                        <h4 className='title mt-1'>Charity</h4>
                    </div>
                </div>
                <h2 className='text-center ms-5 me-5' id="charity-header">Make someone's Life by giving of yours</h2>

            </div>
        )
    }
}
