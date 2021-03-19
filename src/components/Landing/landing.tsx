// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'

import LogoIcon from '../../assets/logo.svg'
import BkgImg from '../../assets/Bkg-big.svg'
import ElipseImage from '../../assets/Ellipse 1.svg'

import { AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
// import { GrClose } from 'react-icons/gr'
import { RiCloseFill } from 'react-icons/ri'
import { CgMenuHotdog } from 'react-icons/cg'

import './styleLanding.css'


const Landing: React.FC = () => {
  const [sideBar, setsideBar] = useState(false)

  function showMenu() {
    setsideBar(!sideBar)
  }


  return (
    <div className='landing-container'>

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
              <li><AiOutlineInstagram /> Instagram</li>
              <li><FiTwitter /> Twitter</li>
              <li><AiOutlineGithub /> GitHub</li>
              <li><AiOutlineYoutube /> YouTube</li>
              <li><FaTwitch /> Twitch</li>
            </ul>

          </div>

          <div className="menu-list">
            <span>Menu</span>

            <ul>
              <li> Work</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="email-div">
            <span>Email</span>
            <a href="http://">Matheus@email.com</a>
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
