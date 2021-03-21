// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../../assets/logo.svg'
import ElipseImage from '../../assets/Ellipse 1.svg'

import { AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
// import { GrClose } from 'react-icons/gr'
import { RiCloseFill } from 'react-icons/ri'
import { CgMenuHotdog } from 'react-icons/cg'

import './styleLanding.css'

const Landing = () => {

  const [sideBar, setsideBar] = useState(false)

  function showMenu() {
    setsideBar(!sideBar)
  }

  const cursorRef = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {

      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      cursorRef.current.style.transition = `transform .1s ease`
    })

  }, [])


  return (
    <div className='landing-container'>

      <div className="landing">

        <header>
          <img src={LogoIcon} alt="logo" />

          <button onClick={showMenu} className="toggle-Button">
            <CgMenuHotdog />
          </button>
        </header>

        <div className={sideBar ? 'menu active' : 'menu'}>
          <button onClick={showMenu} ><RiCloseFill size={40} /></button>
          <div className="social-list">
            <span>Social</span>

            <ul>
              <li>
                <Link to="/" className="hover-this">
                  <AiOutlineInstagram />
                  <span>Instagram</span>
                </Link>
              </li>

              <li>
                <Link to="/" className="hover-this">
                  <FiTwitter />
                  <span>Twitter</span>
                </Link>
              </li>

              <li>
                <Link to="/" className="hover-this">
                  <AiOutlineGithub />
                  <span>GitHub</span>
                </Link>
              </li>

              <li>
                <Link to="/" className="hover-this">
                  <AiOutlineYoutube />
                  <span>
                    YouTube
                    </span>
                </Link>
              </li>

              <li>
                <Link to="/" className="hover-this">
                  <FaTwitch />
                  <span>
                    Twitch
                    </span>
                </Link>
              </li>
            </ul>

          </div>

          <div className="menu-list">
            <span>Menu</span>

            <ul>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>


          <div className="email-div">
            <span>Email</span>
            <Link to="http://" className="hover-this">Matheus@email.com</Link>
          </div>
        </div>

        <section>
          <div className="div-1">
            <div className="apresentation-div">
              <span className="hello">Hello</span>
              <strong>I'm Mathews</strong>
              <span className="profile" >Web Developer</span>
            </div>

            <button type="button"> About me </button>

          </div>
          <div className="div-2">
            <img src={ElipseImage} alt="" />
          </div>
        </section>
      </div>

      <div className="cursor" ref={cursorRef} />
    </div>
  )
}

export default Landing
