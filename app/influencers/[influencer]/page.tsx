import { useRouter } from 'next/navigation'
import React from 'react'
import all_influencer from'@/Assets/influencers.js'
import Image from 'next/image'

const page = ({params}) => {
const influencer=all_influencer.find((e)=>e.id===Number(params.influencer));

  return (
    <div>
      <Image src={influencer?.image} alt='' width={220} />
      <h1>{influencer?.name}</h1>
    </div>
  )
}

export default page
