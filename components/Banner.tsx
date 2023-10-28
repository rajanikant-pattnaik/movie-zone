import { Props } from '@/Types'
import Image from 'next/image';
import React from 'react'

const Banner:React.FC<Props> = ({image}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div >
      <Image src={`${baseUrl}${image}`} alt="media" height={200} width={250} className='w-96'/>
    </div>
  )
}

export default Banner