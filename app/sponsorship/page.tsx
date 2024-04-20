import React from 'react'
import style from '@/Style/Sponsorship.module.css'
import all_sponsorship from '@/Assets/sponsores.js'
import Image from 'next/image'
import Link from 'next/link'

const sponsorship = () => {
  return (
    <div className={style.sponsorship}>
      <h1>Sponsorships</h1>
      <div className={style.sponsorshipItem}>
      {all_sponsorship.map(item=>(
        <div key={item.id}>
        
        <Link href={`/sponsorship/${item.id}`} style={{ textDecoration: 'none',color:'black' }}>
        <Image src={item.image} alt='' width={270} className={style.image}/>
        <h3>{item.title}</h3>
        <p>Min {item.min_follower} follower required</p>
        <p>{item.price}</p>
        </Link>
        </div>

      ))}
      </div>
    </div>
  )
}

export default sponsorship
