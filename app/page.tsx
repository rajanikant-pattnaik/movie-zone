"use client";
import Navbar from '@/components/Navbar'
import { RootState } from '@/state/store';
import Image from 'next/image'
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <Navbar/>
      <div>
        {user !== null ? (
          <div>
            <p>{user.email}</p>
            <p>{user.id}</p>
            <p>{user.username}</p>
          </div>
        ) : (
          <div>
            <p>No user</p>
          </div>
        )}
      </div>
    </>
  )
}
