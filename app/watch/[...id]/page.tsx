"use client";
import { getTVorMovieDetailsByID } from '@/utils/fetchData';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
    const params=useParams();
    useEffect(() => {
       const fetchDetails=async()=>{
        const res=await getTVorMovieDetailsByID(params.id[0],params.id[1]);
        console.log(res);
       }
       fetchDetails();
    }, [params.id])
  return (
    <div>Page</div>
  )
}

export default Page