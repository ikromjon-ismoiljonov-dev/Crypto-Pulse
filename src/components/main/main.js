import React from 'react'
import './main.css'
import Market from './market/market'
import Image from './market/image';


const Main = (props) => {

    console.log(props.data);


  return (
    <div className='main1 mx-auto'>
          <div className='w-100 px-3'>
          <div className='w-100 div-wrapper1 '>
        <div className='sc4 mx-auto bg-info d-flex d-block'>
                <div className='col-4'>
                  <p className='pfs1'>Coin</p>
                </div>
                <div className='col-1 text-end'>
                <p className='pfs1'>Price</p>
                </div>
                <div className='col-2 ms-5  col-xxl-2 col-xl-2 col-lg-2 text-center'>
                <p className='text-end pfs1'>24h Change</p>
                </div>
                <div className='col-4 text-end'>
                <p className='pme1'>Market Cap</p>
                </div>
            </div>
            <div className='sc1 d-flex'>
                <div className='w-100 d-flex px- divhov'>
                <div className='div-img1'>
              {props.images? (
                props.images.map((item) => {
                  return <Image images={item}/>
                })
              ) : (
                <p>Loading...</p>
              )}
              <div ></div>
              </div>
                 <div className='div-img2'>
                 {props.data? 
                        (
                        props.data.map((item) => {
                          return <Market data={item} images={props.images}/>
                        })

                    )
                    : 
                    (
                        <p>Loading...</p>
                    )}
                 </div>
                </div>

            </div>
        </div>
          </div>

        <div className='choose mx-auto'>
          <h1 className='text-center'>WHY <span>CHOOSE US</span></h1>

          <section>
                    <div className='row mt-5 d-flex align-items-center justify-content-between'>
                        <div className='col-xxl-4 col-xl-4 wallet-section'>
                          <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className='i11'>
                                <i className='fa-solid fa-wallet text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>CONNECT YOUR WALLET</p>
                                <p className='text-white p5'>Use Trust Wallet, Metamask or to connect to the app.</p>
                              </div>
                            </div>
                        </div>
                        <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className=' i11'>
                                <i className='fa-solid fa-pencil text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>SELECT YOUR QUANTITY</p>
                                <p className='text-white p5'>Use Trust Wallet, Metamask or to connect to the app.</p>
                              </div>
                            </div>
                        </div>
                        <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className='i11'>
                                <i className='fa-solid fa-tablet text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>CONFIRM TRANSACTION</p>
                                <p className='text-white p5'>Earn by selling your crypto on our marketplace.</p>
                              </div>
                            </div>
                        </div>
                        </div>
                        <div className='div-image1'>
                              <img className='img-fluid' src={require('../../images/hand.png')} alt="" />
                        </div>
                        <div className='col-xxl-4 col-xl-4 wallet-section'>
                        <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className='i11'>
                                <i className='fa-solid fa-mobile text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>RECEIVE YOUR OWN NFTS</p>
                                <p className='text-white p5'>Invest all your crypto at one place on one platform.</p>
                              </div>
                            </div>
                        </div>
                        <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className=' i11'>
                                <i className='fa-solid fa-sack-dollar text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>TAKE A MARKET TO SELL</p>
                                <p className='text-white p5'>Discover, collect the right crypto collections to buy or sell.</p>
                              </div>
                            </div>
                        </div>
                        <div className='col-12 p-2'>
                            <div className='phandler d-flex justify-content-center div-col1'>
                              <i className='i11'>
                                <i className='fa-solid fa-layer-group text-white'></i>
                              </i>
                              <div className='fs-3 p-2'>
                                <p className='p4'>DRIVE YOUR COLLECTION</p>
                                <p className='text-white p5'>We make it easy to Discover, Invest and manage.</p>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
          </section>
        </div>
          
          <div className='join'>
                    
              <div className='div-join d-flex justify-content-around text-center'>
                          <img className='animate__animated img22 img-animated animated animate__shakeY' src={require('../../images/bitcoin.png')} alt="" />
                            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-12 divt1'>
                            <h1 className='join1 text-white'>JOIN US VIA </h1>
                            <h1 className='join2 text-center'>DISCORD</h1>
                            <p>Invest and manage all your crypto at one place.</p>


                            <a href="https://discord.com/" target='_blank'><button className='btn-join text-white px-4 py-3'>Join via Discord</button>  </a>
                            </div>
                          <img className='img-animated img22 animate__animated animate__shakeY' src={require('../../images/eth.png')} alt="" />
              </div>
          </div>

          <div className='footer d-flex align-items-center'>
                    <div className='mx-auto div-footer12'>
                        <div className=' col-10 mx-auto d-flex justify-content-between'>
                        <i className='text-white fs-3 fa-brands fa-twitter'></i>
                          <i className='text-white fs-3 fa-brands fa-discord'></i>
                          <i className='text-white fs-3 fa-brands fa-facebook-f'></i>
                          <i className='text-white fs-3 fa-brands fa-youtube'></i>
                        </div>
                        <div className='d-flex col-12 text-white justify-content-around mt-3'>
                            <p className='footerp'>Privacy</p>
                            <p className='footerp'>Terms of Use</p>
                        </div>
                    </div>
          </div>
    </div>
  )
}

export default Main
