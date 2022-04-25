import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { BsFillChatDotsFill, BsArrowLeft } from 'react-icons/bs'
import { BiX, BiSend } from "react-icons/bi";
import Navigation from '../component/Navigation';

export default class Reminder extends Component {
    render() {
        $(function () {
            $(".remind-box").toggle('scale'); //ini
        })
        return (
            <div>
                <Navigation />
                <div className="con"><br />

                    <div className="remind-box mt-5">
                        <div className="remind-box-header text-center">
                            Reminder
                            <NavLink to="/" className="a"><span className="chat-box-toggle"><BiX size={28} id="white"/></span></NavLink>
                        </div>
                        <div className="remind-box-body">
                            <div className="justify-content-center">
                                <div className="card-recent mx-auto d-block mb-3 mt-4">
                                    <div className="row ms-1 me-1">
                                        <div className="col-3">
                                            <img src="/assets/bill.png" id="bill" className="mt-2" alt="" />
                                        </div>
                                        <div className="col-4 mt-4" id="txt">
                                            <h4 id="recent-text" >Pay your bills</h4>
                                            <p id="bill-text">Electricity bill</p>
                                        </div>
                                        <div className="col-5 mt-4" id="ket">
                                            <h4 id="nominal" >Rp 250.000,00</h4>
                                            <p id="date" className='text-right'>Apr 28</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-recent mx-auto d-block mb-3">
                                    <div className="row ms-1 me-1">
                                        <div className="col-3">
                                            <img src="/assets/bill.png" id="bill" className="mt-2" alt="" />
                                        </div>
                                        <div className="col-4 mt-4" id="txt">
                                            <h4 id="recent-text" >Pay Bills</h4>
                                            <p id="bill-text">Insurance bill</p>
                                        </div>
                                        <div className="col-5 mt-4" id="ket">
                                            <h4 id="nominal" >Rp 330.000,00</h4>
                                            <p id="date" className='text-right'>Apr 25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-recent mx-auto d-block mb-2">
                                    <div className="row ms-1 me-1">
                                        <div className="col-3">
                                            <img src="/assets/bill.png" id="bill" className="mt-2" alt="" />
                                        </div>
                                        <div className="col-4 mt-4" id="txt">
                                            <h4 id="recent-text" >Pay Bills</h4>
                                            <p id="bill-text">Paylater bill</p>
                                        </div>
                                        <div className="col-5 mt-4" id="ket">
                                            <h4 id="nominal" >Rp 900.000,00</h4>
                                            <p id="date" className='text-right'>Apr 21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>




            </div>
        )
    }
}
