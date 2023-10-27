"use client";
import { clearUser } from "@/state/features/userSlice";
import axios from "axios";
// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    dispatch(clearUser());
    const res = await axios.get("/api/users/logout");
    console.log(res.data);
    router.push("/auth");
  };
  return (
    <nav className="bg-red-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">Movie-Zone</p>
        </Link>

        <div className="lg:flex hidden space-x-4">
          <Link href="/movies">
            <p className="text-white hover:text-gray-300">Movies</p>
          </Link>

          <Link href="/tv">
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

          <p onClick={handleLogout} className="text-white hover:text-gray-300">
            Profile
          </p>
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
