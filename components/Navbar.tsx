"use client";
// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">Netflix</p>
        </Link>

        <div className="lg:flex hidden space-x-4">
          <Link href="/movies">
            <p className="text-white hover:text-gray-300">Movies</p>
          </Link>

          <Link href="/tv-shows">
            <p className="text-white hover:text-gray-300">TV Shows</p>
          </Link>

          <Link href="/my-list">
            <p className="text-white hover:text-gray-300">My List</p>
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link href="/search" className="text-white hover:text-gray-300">
            Search
          </Link>

          <Link href="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
        </div>

        <div className="lg:hidden block">
          {/* Hamburger menu icon for mobile */}
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
