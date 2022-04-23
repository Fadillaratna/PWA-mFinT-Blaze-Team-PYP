import React, { Component } from 'react'
import { BsGlobe, BsFillTelephoneFill, BsFillChatFill, BsChatDots, BsArrowRight  } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


export default class Bri extends Component {
    render() {
        return (
            <div className='con'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g58PGblfdGXaa4OjRRDrfunOAx4oW4a1pA&usqp=CAU" alt="" id="flyer-bank" />
                <div className="ms-4 me-4">
                    <div className="ttl mb-4">
                        <h4 id="fs" className='mt-4 mb-2'>Financial Services</h4>
                        <h3 id="bank-nm">Bank BRI</h3>
                    </div>

                    <div className="dsc mb-4">
                        <h4 className='text-feat'>Description</h4>
                        <p className='dsc-bank'>Bank Rakyat Indonesia or commonly abbreviated as BRI is one of the largest state-owned banks in Indonesia. BRI is here to provide the best service to the Indonesian people.</p>
                    </div>

                    <div className="dsc mb-4">
                        <h4 className='text-feat'>Bank Information</h4>
                        <div className="row">
                            <div className="col-1">
                                <BsGlobe size={14} id="info-ic" />
                            </div>
                            <div className="col-11">
                                <p className='dsc-bank mt-1'>http://bri.co.id/</p>

                            </div>
                        </div>
                        <div className="row" id="prf">
                            <div className="col-1">
                                <BsFillTelephoneFill size={14} id="info-ic" />
                            </div>
                            <div className="col-11">
                                <p className='dsc-bank mt-1'>Call Center BRI 14017 and 1500017</p>

                            </div>
                        </div>
                        <div className="row" id="prf">
                            <div className="col-1">
                                <AiTwotoneMail size={14} id="info-ic" />
                            </div>
                            <div className="col-11">
                                <p className='dsc-bank mt-1'>callbri@bri.co.ic</p>

                            </div>
                        </div>
                        <div className="row" id="prf">
                            <div className="col-1">
                                <BsFillChatFill size={14} id="info-ic" />
                            </div>
                            <div className="col-11">
                                <p className='dsc-bank mt-1'>Very responsive</p>
                            </div>
                        </div>
                        <button className='btn btn-dark' id="msg">Message <BiSend /></button>
                        {/* <p className='dsc-bank'>Bank Rakyat Indonesia or commonly abbreviated as BRI is one of the largest state-owned banks in Indonesia. BRI is here to provide the best service to the Indonesian people.</p> */}
                    </div>

                    <div className="mx-auto d-block mt-2 mb-3" id="review-card">
                        <div className="row">
                            <div className="col-8">
                                <div className="grp">
                                    <h3 className='rate'>4.5<span id="from" className='fw-light'>/5</span></h3>
                                    <h4 className='based mb-2'>Based on 120 Reviews</h4>
                                    <FaStar size={24} className="yellow me-1"/><FaStar size={24} className="yellow me-1"/><FaStar size={24} className="yellow me-1"/><FaStar size={24} className="yellow me-1"/><FaStarHalfAlt size={24} className="yellow"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-center'><BsChatDots size={20} className="gry me-2"/> fill google form to open an account <BsArrowRight size={20} className="prpl ms-2"/></p>

                </div>
            </div>
        )
    }
}
