'use client';
import Image from "next/image";
import style from "./page.module.css";
import all_sponsorship from '@/Assets/sponsores'
import Link from 'next/link'
import arrow_logo from "../Assets/arrow.png"
import all_influencers from '@/Assets/influencers'
import {formatDate} from '../Components/funtions'


export default function Home() {
  //const { all_sponsorship }=useAppContext();

  const slideLeft = (id: any) => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 300;
  }
  const slideRight = (id: any) => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 300;
  }
  const latestSponsorship = all_sponsorship.sort((a, b) => new Date(b.time).valueOf()-new Date(a.time).valueOf()).slice(0, 12);
  const popularSponsorship = all_sponsorship.sort((a, b) => b.views - a.views).slice(0, 12);
  const popularInfluencers = all_influencers.sort((a, b) => parseInt(b.follower) - parseInt(a.follower)).slice(0, 12);


  return (
    <main>
      <div>

        <div className={style.sponsorship}>
          <h1>Latest Sponsorships</h1>
          <div className={style.scroller}>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowLeft} onClick={() => slideLeft('latestSponsorships')} />
            <div className={style.sponsorshipItem} id='latestSponsorships' >
              {latestSponsorship.map(item => (
                <div key={item.id}>
                  <Link href={`/sponsorship/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Image src={item.image} alt='' width={250} className={style.image} />
                    <h3>{item.title}</h3>
                    <p>Min {item.min_follower} follower required</p>
                    <p className={style.price}><span>₹{item.price}</span> <span>{formatDate(item?.time)}</span></p>
                  </Link>
                </div>
              ))}
            </div>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowright} onClick={() => slideRight('latestSponsorships')} />
          </div>
        </div>

        <div className={style.sponsorship}>
          <h1>Popular Sponsorships</h1>
          <div className={style.scroller}>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowLeft} onClick={() => slideLeft('popularSponsorship')} />
            <div className={style.sponsorshipItem} id='popularSponsorship' >
              {popularSponsorship.map(item => (
                <div key={item.id}>
                  <Link href={`/sponsorship/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Image src={item.image} alt='' width={250} className={style.image} />
                    <h3>{item.title}</h3>
                    <p>Min {item.min_follower} follower required</p>
                    <p className={style.price}><span>₹{item.price}</span> <span>{formatDate(item?.time)}</span></p>
                  </Link>
                </div>
              ))}
            </div>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowright} onClick={() => slideRight('popularSponsorship')} />
          </div>
        </div>

        <div className={style.sponsorship}>
          <h1>Popular Influencers</h1>
          <div className={style.scroller}>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowLeft} onClick={() => slideLeft('popularInfluencers')} />
            <div className={style.sponsorshipItem} id="popularInfluencers">
              {popularInfluencers.map(item => (
                <div key={item.id}>

                  <Link href={`/influencers/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div>
                      <Image src={item.image} alt='' width={250} className={style.imageInfl} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>follower {item.follower}</p>

                  </Link>
                </div>

              ))}
            </div>
            <Image src={arrow_logo} alt='' width={22} className={style.arrowright} onClick={() => slideRight('popularInfluencers')} />
          </div>
        </div>
      </div>
    </main>
  );
}
