// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/state/features/userSlice";
import axios from "axios";



const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchItem, setSearchItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <p className="text-white text-2xl font-bold cursor-pointer">
            Movie-Zone
          </p>
        </Link>

        <div className="lg:hidden block">
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

        <div className="lg:flex hidden space-x-4">
          <Link href="/movies">
            <p className="text-white hover:text-gray-300 cursor-pointer">Movies</p>
          </Link>

          <Link href="/tv">
            <p className="text-white hover:text-gray-300 cursor-pointer">TV Shows</p>
          </Link>

          <Link href="/my-list">
            <p className="text-white hover:text-gray-300 cursor-pointer">My List</p>
          </Link>
        </div>

        <div className="lg:flex hidden">
          <input
            type="text"
            name="searchItem"
            value={searchItem}
            onChange={(e: any) => {
              setSearchItem(e.target.value);
            }}
            className="border rounded-md py-1 px-2 text-black"
          />
          <Link href={`/search/${searchItem}`} passHref>
            <button className="text-white hover:text-gray-300 cursor-pointer">Search</button>
          </Link>
          <p onClick={handleLogout} className="text-white hover:text-gray-300 cursor-pointer">Profile</p>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
