import React, { useRef } from 'react'
import Nav from './nav/nav'
import './header.css'
import Nav2 from './nav/nav2';
import { Link } from 'react-scroll';

const Header = (props) => {


  console.log();
  return (
    <div className='headerSection'>
      <Nav/>
      <Nav2/>

        <div className='header1 mx-auto'>
          <div className='w-100 d-block'>
          <div className='divflex1 col-12'>
               <div className='col-12 d-block'>
               <div className='w-100 d-flex justify-content-around text-center'>
                    <img className='animate__animated img22 img-animated animated animate__shakeY' src={require('../../images/bitcoin.png')} alt="" />
                      <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-12 divt1'>
                      <h1 className='h112'>TRACK AND TRADE</h1>
                      <h1 className='h113 text-center'>CRYPTO CURRENCIES</h1>

                      </div>
                    <img className='img-animated img22 animate__animated animate__shakeY' src={require('../../images/eth.png')} alt="" />
                </div>
                <div className='col-12 d-flex justify-content-center'>
                  <Link 
                    activeClass='active'
                    to='main1'
                    smooth={0}
                    duration={500}
                    className='mt-3'
                  >
                    <a href="" className='aprice px-5 py-3'>See Prices <i className='fa-solid fa-angle-down'></i></a>
                  </Link>
                </div>
              <div className='div-hd1 row mx-auto mt-4'>
                
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div className='mx-auto d-flex'>
                      <img src={props.images[0].link} className='img-center' alt="" />
                    </div>
                    <div className='div11 d-flex justify-content-center'>
                      <p className='p11 text-white'>{props.data[0].name}</p>
                      <p className='ms-2 p12'>{props.data[0].priceChange1d} %</p>
                    </div>
                    <p className='p13'>$ {Math.trunc(props.data[0].price).toLocaleString()}.00</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div className='mx-auto d-flex'>
                      <img src={props.images[1].link} className='img-center' alt="" />
                    </div>
                    <div className='div11 d-flex justify-content-center'>
                      <p className='p11 text-white'>{props.data[1].name}</p>
                      <p className='ms-2 p12'>{props.data[1].priceChange1d} %</p>
                    </div>
                    <p className='p13'>$ {Math.trunc(props.data[1].price).toLocaleString()}.00</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div className='mx-auto d-flex'>
                      <img src={props.images[2].link} className='img-center' alt="" />
                    </div>
                    <div className='div11 d-flex justify-content-center'>
                      <p className='p11 text-white'>{props.data[2].name}</p>
                      <p className='ms-2 p12'>{props.data[2].priceChange1d} %</p>
                    </div>
                    <p className='p13'>$ {Math.trunc(props.data[2].price).toLocaleString()}.00</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div className='mx-auto d-flex'>
                      <img src={props.images[3].link} className='img-center' alt="" />
                    </div>
                    <div className='div11 d-flex justify-content-center'>
                      <p className='p11 text-white'>{props.data[3].name}</p>
                      <p className='ms-2 p12'>{props.data[3].priceChange1d} %</p>
                    </div>
                    <p className='p13'>$ {Math.trunc(props.data[3].price).toLocaleString()}.00</p>
                </div>
                
              </div>

               </div>


            </div>
          </div>
        </div>

        <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">

            <button type="button" class="btn-close ms-auto me-1 mt-1 btn-hover1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body d-flex mx-auto align-items-center">
              <div className='div-canvas1'>
              <Link
                        activeClass='active'
                        to="headerSection"
                        spy={true}
                        smooth={0}
                        duration={500}
                        data-bs-dismiss="offcanvas"
                    >
                         <li><a href="#Home">Home</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="main1"
                        spy={true}
                        smooth={0}
                        duration={500}
                        data-bs-dismiss="offcanvas"
                    >
                         <li><a href="#Home">Market</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="choose"
                        spy={true}
                        smooth={0}
                        duration={500}
                        data-bs-dismiss="offcanvas"
                    >
                         <li><a href="#Home">Choose Us</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="join"
                        spy={true}
                        smooth={0}
                        duration={500}
                        data-bs-dismiss="offcanvas"
                    >
                         <li><a href="#Home">Join</a></li>   
                    </Link>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Header
