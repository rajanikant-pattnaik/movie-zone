"use client";
import { useState } from "react";
import axios from "axios";
import { UserState } from "@/Types";
import { useDispatch } from "react-redux";
import { setUser } from "@/state/features/userSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLogin, setisLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e: any) => {
    try {
      e.preventDefault();
      setisLoading(true);
      if (isLogin) {
        const res = await axios.post("/api/users/login", { email, password });
        const value = res.data;
        const tokenData = value.tokenData;
        const userVal: UserState = {
          user: {
            username: tokenData.username,
            id: tokenData.id,
            email: tokenData.email,
          },
        };
        dispatch(setUser(userVal.user));
        router.push("/");
        console.log(value);
      } else {
        const res = await axios.post("/api/users/register", {
          username,
          email,
          password,
        });
        const value = res.data;
        setisLogin(true);
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false)
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 opacity-50">
        <Image src="/background.jpg" alt="background image" fill />
      </div>

      <div className=" relative z-10 min-h-screen flex items-center justify-center">
        <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <h1 className="text-3xl text-center mb-6 text-red-700">{isLoading?"Loading....":"Movie-Zone"}</h1>

          <form className="space-y-4">
            <div className={`${isLogin ? "hidden" : "block"}`}>
              <label className={`block text-gray-700 text-sm font-bold mb-2`}>
                Username
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                type="username"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className={`w-full ${isLoading?"bg-red-200":"bg-red-700"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
              onClick={handleAuth}
            >
              {isLogin ? "Log In" : "Register"}
            </button>
          </form>

          <div
            className="text-center mt-4"
            onClick={() => setisLogin(!isLogin)}
          >
            <p className="text-red-700">
              {isLogin ? "Donot have an account?" : "Already have an account?"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
