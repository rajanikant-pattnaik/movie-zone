import { Props } from '@/Types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Banner:React.FC<Props> = ({image,id,type}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <Link href={`/watch/${type}/${id}`}>
      <Image src={`${baseUrl}${image}`} alt="media" height={200} width={250} className='w-96'/>
    </Link>
  )
}

export default Banner