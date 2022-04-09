import React, { Component } from 'react';
import { BsArrowLeft, BsShareFill } from 'react-icons/bs';
import { MdQrCode2, MdQrCodeScanner } from 'react-icons/md';
import { NavLink } from 'react-router-dom'

class QR extends Component {
    render() {
        return (
            <div className='con'><br />
                <div className="row me-4 ms-4 mb-4">
                    <div className="col-2">
                        <NavLink className="a" to="/"><BsArrowLeft className='arrow-left' /></NavLink>
                    </div>
                    <div className="col-6">
                        <h4 className='title mt-1'>My QR</h4>
                    </div>
                    <div className="col-3">
                        <BsShareFill className='share' />
                    </div>
                </div>

                <div className="row ms-5 me-4 mb-5">
                    <div className="col-2">
                        <img src="/assets/blaze.png" alt="" className='blaze-prof' />
                    </div>
                    <div className="col-10 mt-1">
                        <h4 className='profname'>Profile Name</h4>
                        <h4 className='john'>Blaze Jhon</h4>
                    </div>
                </div>

                <div className="ms-4">
                    <div className="con-card ">
                        <div className="row p-4 ms-3 me-3">
                            <div className="col-6 ">
                                <MdQrCodeScanner size={23} id="myqr" />
                                <h5 id="text-scan" >Scan QR Code</h5>
                            </div>
                            <div className="col-6">
                                <MdQrCode2 size={23} id="qr" />
                                <h5 id="text-sc">Scan QR Code</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="black-card mt-5 justify-content-center p-4">
                    <MdQrCode2 size={200} id="mdqr" className='mx-auto d-block mt-4' />
                    <div className="highlight mt-4 ms-3">
                        <div className="row p-4">
                            <div className="col-2">
                                <img src="/assets/lamp.png" alt="" className='lamp' />
                            </div>
                            <div className="col-10" id="desc">
                                <h4 className='ask'>Show the QR Code and scan to proced transaction</h4>
                                <h4 className='know'>I understand</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

export default QR;