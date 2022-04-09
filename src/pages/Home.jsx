import React, { Component } from 'react'
import { Carousel, Nav } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Navigation from '../component/Navigation'


export default class Home extends Component {
    render() {
        return (
            <div className='con'><br />
                <Navigation />
                <div id="content-top">
                    <div className='ms-4 me-5 mb-3'>
                        <div className="row">
                            <div className="col-10">
                                <h5 className='hello mt-2'>Hello,</h5>
                                <h4 className='name'>Blaze <img src="/assets/fire.png" className='fire' alt="" /></h4>
                            </div>
                            <div className="col-1 mt-3 ">
                                <img src="/assets/blaze.png" alt="Blaze Profile" className='blaze-profile' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-4 me-4">
                    <Carousel className='car mb-4' >
                        <Carousel.Item className='car'>
                            <img
                                className="d-block w-100" id="banner"
                                src="https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>QR mFinT</h3>
                                <p>Digital payment transaction features</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='car'>
                            <img
                                className="d-block w-100" id="banner"
                                src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpbnRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Dom mFinT</h3>
                                <p>Financial report features</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='car'>
                            <img
                                className="d-block w-100" id="banner"
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Charity</h3>
                                <p>Donate and share features to those in need</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <div>
                        <div className="row mb-2">
                            <div className="col-9">
                                <h4 className='text-feature mb-2'>Feature</h4>
                            </div>
                            <div className="col-3 mt-2">
                                <h5 id="show">Show All</h5>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-3" id="p">
                                <div className="card text-center align-items-center" id="card-feature-1">
                                    <img src="/assets/ba.png" className="card-img-top mb-2 mt-3" alt="{product.title} " id="icon-feature" />
                                    <h6 className='text-ft mt-1'>BAFinT</h6>
                                </div>
                            </div>
                            <div className="col-3" id="p">
                                <div className="card text-center align-items-center" id="card-feature-2">
                                    <img src="/assets/robo.png" className="card-img-top mb-2 mt-3" alt="{product.title} " id="icon-feature" />
                                    <h6 className='text-ft mt-1'>Robobot</h6>
                                </div>
                            </div>
                            <div className="col-3" id="p">
                                <div className="card text-center align-items-center" id="card-feature-3">
                                    <img src="/assets/charity.png" className="card-img-top mb-2 mt-3" alt="{product.title} " id="icon-feature" />
                                    <h6 className='text-ft mt-1'>Charity</h6>
                                </div>
                            </div>
                            <div className="col-3" id="p">
                                <NavLink to="/qr" className="a">
                                    <div className="card text-center align-items-center" id="card-feature-4">
                                        <img src="/assets/qr.png" className="card-img-top mb-2 mt-3" alt="{product.title} " id="icon-feature" />
                                        <h6 className='text-ft mt-1'>QR</h6>
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='ms-4 me-5 mb-4'>
                    <div className="row mb-2">
                        <div className="col-11">
                            <h4 className='text-feature mb-2'>Recent Activity</h4>
                        </div>
                        <div className="col-1 mt-2">
                            <BsArrowRight id="arrow" />
                        </div>
                    </div>
                    <div className="justify-content-center">
                        <div className="card-recent mb-2">
                            <div className="row ms-1 me-1">
                                <div className="col-3">
                                    <img src="/assets/bill.png" id="bill" className="mt-2" alt="" />
                                </div>
                                <div className="col-4 mt-4" id="txt">
                                    <h4 id="recent-text" >Pay Bills</h4>
                                    <p id="bill-text">Electricity bill</p>
                                </div>
                                <div className="col-5 mt-4" id="ket">
                                    <h4 id="nominal" >Rp 250.000,00</h4>
                                    <p id="date" className='text-right'>Apr 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-recent mb-2">
                            <div className="row ms-1 me-1">
                                <div className="col-3">
                                    <img src="/assets/bill.png" id="bill" className="mt-2" alt="" />
                                </div>
                                <div className="col-4 mt-4" id="txt">
                                    <h4 id="recent-text" >Pay Bills</h4>
                                    <p id="bill-text">Insurance bill</p>
                                </div>
                                <div className="col-5 mt-4" id="ket">
                                    <h4 id="nominal" >Rp 500.000,00</h4>
                                    <p id="date" className='text-right'>March 28</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br />
            </div>
        )
    }
}
