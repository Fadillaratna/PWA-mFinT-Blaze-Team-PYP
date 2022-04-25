import React, { Component } from 'react'
import Navigation from '../component/Navigation'
import { HiOutlineLockClosed, HiLink, HiCreditCard } from 'react-icons/hi'
import { MdOutlineLanguage } from "react-icons/md";
import { CgBulb } from "react-icons/cg";
import { FaFingerprint, FaMoneyBill } from "react-icons/fa";
import { NavLink } from 'react-router-dom'


export default class Account extends Component {
    render() {
        return (
            <div className='con-2'>
                <Navigation />
                <div className="hero mb-3">
                    <br /><br />
                    <img src="/assets/blaze-round.png" className="mx-auto d-block" alt="" id="round" />
                    <h3 className='text-name mt-2'>Blaze Jhon</h3>
                    <button className='btn btn-dark mx-auto d-block' id="purple">Edit Profile</button>
                </div>
                <div className="setting mb-5"><br />
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <HiOutlineLockClosed className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>Security Code</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <HiLink className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>Connected App</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <HiCreditCard className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>My PAL Card</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <FaMoneyBill className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>My Bills</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <MdOutlineLanguage className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>Language</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto d-block mb-3" id="card-setting">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <div className="rect">
                                    <CgBulb className='mx-auto d-block' id="icon" size={25} />
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <h5 className='mt-1 setting-text'>minT Guide</h5>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/cover" className='btn btn-dark w-50 mx-auto d-block mt-1' id="purple">Sign Out</NavLink>
                </div>
            </div>
        )
    }
}
