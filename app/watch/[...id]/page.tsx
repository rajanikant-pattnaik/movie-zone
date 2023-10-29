"use client";
import { getTVorMovieDetailsByID, getTVorMovieVideosByID } from '@/utils/fetchData';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const params=useParams();
    const [value, setValue] = useState("")
    useEffect(() => {
       const fetchDetails=async()=>{
        const res=await getTVorMovieDetailsByID(params.id[0],params.id[1]);
        const r1=await getTVorMovieVideosByID(params.id[0],params.id[1]);
        console.log(res);
        console.log(r1);
        const page=JSON.stringify(res);
        setValue(page)
       }
       fetchDetails();
    }, [params.id])
  return (
    <div>{value}</div>
  )
}

export default Page