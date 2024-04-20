import { useRouter } from 'next/navigation'
import React from 'react'
import all_sponsors from '@/Assets/sponsores.js'
import Image from 'next/image'
import style from './page.module.css'
import { formatDate } from '../../../Components/funtions'

const page = ({ params }) => {
  const sponsor = all_sponsors.find((e) => e.id === Number(params.sponsor));

  return (
    <div className={style.sponsor}>
      <div className={style.main}>
        <Image src={sponsor?.image} alt='' className={style.image} />
        <h1>{sponsor?.title}</h1>
        <p>Posted {formatDate(sponsor?.time)}</p>
        <p>₹{sponsor?.price}</p>
        <div><h3>Description</h3>
          <p>Paid Sign Up Campaign Hustling Collaborators is here with another campaign! Campaign: Sign up for Google Cloud Free Trial Payout: INR 300</p></div>
        <br />
        <div><h3>Minimum followers Requierd</h3>
          <p>{sponsor?.min_follower}</p>
        </div>
        <br/>
        <div><h3>Average Views Requierd</h3>
          <p>{sponsor?.views}</p>
          </div>
          <br/>
          <div><h3>Catagories</h3>
            <div className={style.catagories}>
              <p>Blogs</p>
              <p>Lifestyle</p>

              <p>Promotions</p>

              <p>Technology</p>

              <p>Vlogs</p>
            </div>
          </div>
          <br />

          <div className={style.button}><button>Message</button><button>Apply</button></div>
        </div>
      </div>
      )
}

      export default page
