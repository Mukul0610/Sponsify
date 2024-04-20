import React from 'react'
import Image from 'next/image'
import logo from '/Assets/logo.png';
import search_logo from '/Assets/icons8-search-50.png';
import profile_logo from '/Assets/profile_image.png';
import notification_logo from '/Assets/notification_logo.png';
import style from '../Style/Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link href='/' style={{textDecoration:'none'}}>
        <div className={style.logo}>
        <Image src={logo} width={120} alt="" />
        <h1>SPON<span>SIFY</span></h1>
        </div>
        </Link>

        <div className={style.search}>
          <select>
            <option value='sponsorship'>Sponsorship</option>
            <option value='influencers'>Influencers</option>

          </select>
        <input type="text" />
        <button>
        <Image src={search_logo} width={35} alt="" />
        </button>
        </div>
        <div className={style.profile}>
        <p>Login</p>
        <Image src={profile_logo} width={50} alt="" />
        <Image src={notification_logo} width={40} alt="" />
        <div className={style.notification_count}>2</div>
        </div>
        
    </div>
  )
}

export default Navbar
