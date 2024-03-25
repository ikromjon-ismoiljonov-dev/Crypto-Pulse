import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll'



const Nav2 = () => {

    const [scrolled, setScrolled] = useState(false)

    const style = {
        position: 'fixed',
        margin: 'auto',
        width: '100%',
        background: '#0f051d'
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200;
        if(isScrolled!=scrolled){
            setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    
    })

  return (
    <div style={scrolled? style: null} className={scrolled? 'navbar3' : 'nav2'}>
        <nav className='w-100 align-items-center'>
            <div className='navbar align-items-center mx-auto'>
                <a href="" className='a1'>Crypto Pulse</a>
                <ul className='d-flex mt-4 justify-content-between align-items-center col-xxl-5 col-xl-5 col-lg-6 col-md-7 noneul'>
                    <Link
                        activeClass='active'
                        to="headerSection"
                        spy={true}
                        smooth={0}
                        offset={-120}
                        duration={500}
                    >
                         <li><a href="#Home">Home</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="main1"
                        spy={true}
                        smooth={0}
                        offset={-120}
                        duration={500}
                    >
                         <li><a href="#Home">Market</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="choose"
                        spy={true}
                        offset={-120}
                        smooth={0}
                        duration={500}
                    >
                         <li><a href="#Home">Choose Us</a></li>   
                    </Link>
                    <Link
                        activeClass='active'
                        to="join"
                        spy={true}
                        offset={-120}
                        smooth={0}
                        duration={500}
                    >
                         <li><a href="#Home">Join</a></li>   
                    </Link>
                </ul>
                <div className='col-xxl-1 col-xl-1 col-lg-1 col-2 col-md-1 col-sm-2 d-flex justify-content-between mt-2'>
                    <a href="https://discord.com/" target='_blank'>
                        <i class="fa-brands fa-discord fs-4"></i>
                    </a>
                    <a href="https://twitter.com/" target='__blank'>
                        <i className='fa-brands a111 fa-twitter fs-4'></i>
                    </a>
                    <button class="btn text-white btnnone1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav2
