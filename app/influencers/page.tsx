import React from 'react'
import style from '@/Style/Sponsorship.module.css'
import all_influencer from '@/Assets/influencers'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className={style.sponsorship}>
      <h1>Influencers</h1>
      <div className={style.sponsorshipItem}>
      {all_influencer.map(item=>(
        <div key={item.id}>
          
        <Link href={`/influencers/${item.id}`} style={{ textDecoration: 'none',color:'black' }}>
        <div>
        <Image src={item.image} alt='' width={270} className={style.imageInfl}/>
        </div>
        <h3>{item.name}</h3>
        <p>follower {item.follower}</p>
        
        </Link>
        </div>

      ))}
      </div>
    </div>
  )
}

export default page
