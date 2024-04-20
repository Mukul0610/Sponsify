"use client";

import React, { useState } from 'react'
import style from '../Style/Sidebar.module.css'
import Image from 'next/image'
import sponsorship_logo from '/Assets/Sponsorship.png';
import influncer_logo from '/Assets/influncer_icon.png';
import home_logo from '/Assets/home.png';
import Link from 'next/link';

const Sidebar = () => {

    const [menu, setMenu] = useState("Home")
    return (
        <div className={style.side}>
        <div className={style.sidebar}>
        <div className={style.sidebarItem}>
                {menu === 'Home' ? <div className={style.vl} /> : <div className={style.vln}></div>}
                <Link href='/' style={{ textDecoration: 'none' }}><p onClick={() => { setMenu("Home") }}><Image src={home_logo} width={30} alt="" />HOME</p></Link>
            </div>
            <div className={style.sidebarItem}>
                {menu === 'sponsorship' ? <div className={style.vl} /> : <div className={style.vln}></div>}
                <Link href='/sponsorship' style={{ textDecoration: 'none' }}><p onClick={() => { setMenu("sponsorship") }}><Image src={sponsorship_logo} width={25} alt="" />SPONSORSHIP</p></Link>
            </div>
            <div className={style.sidebarItem}>
                {menu === 'influencer' ? <div className={style.vl} /> : <div className={style.vln}></div>}
                 <Link href='/influencers' style={{ textDecoration: 'none'  }}><p onClick={() => { setMenu("influencer") }}><Image src={influncer_logo} width={25} alt="" />INFLUENCERS</p></Link>
            </div>
            <Link href='/createcampaign' style={{ textDecoration: 'none'  }}><button className={style.button}>Create Campaign </button></Link>
        </div>
        </div>
    )
}

export default Sidebar
