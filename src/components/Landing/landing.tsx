// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
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
import CursorEffect from '../cursorEffect/cursorEffect'

const Landing = () => {
  const [sideBar, setsideBar] = useState(false)

  function showMenu() {
    setsideBar(!sideBar)
  }


  return (
    <div className='landing-container'>
      <CursorEffect />

      <div className="landing">
        <header>
          <img src={LogoIcon} alt="" />

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
              <li><Link to="/" className="hover-this">Work</Link></li>
              <li><Link to="/" className="hover-this">About</Link></li>
              <li><Link to="/" className="hover-this">Services</Link></li>
              <li><Link to="/" className="hover-this">Contact</Link></li>
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
    </div>
  )
}

export default Landing
