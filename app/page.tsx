"use client";
import { MovieCard } from "@/Types";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import { RootState } from "@/state/store";
import {
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
} from "@/utils/fetchData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  const [TrendingData, setTrendingData] = useState<[MovieCard]>([undefined]);
  const [PopularData, setPopularData] = useState<[MovieCard]>([undefined]);
  const [TopratedData, setTopratedData] = useState<[MovieCard]>([undefined]);
  useEffect(() => {
    const fetcData = async () => {
      let res = await getTrendingMedias("movie");
      let newData = res.results;
      setTrendingData(
        newData?.map((item: any) => {
          return {
            image: item.backdrop_path,
            id: item.id,
            title: item.title,
          };
        })
      );
      res = await getTopratedMedias("movie");
      newData = res.results;
      setTopratedData(
        newData?.map((item: any) => {
          return {
            image: item.backdrop_path,
            id: item.id,
            title: item.title,
          };
        })
      );
      res = await getPopularMedias("movie");
      newData = res.results;
      setPopularData(
        newData?.map((item: any) => {
          return {
            image: item.backdrop_path,
            id: item.id,
            title: item.title,
          };
        })
      );
    };
    fetcData();
  }, []);
  return (
    <>
      <Navbar />
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
        <div>
          <h1>Trending Movies</h1>
          {TrendingData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="flex flex-wrap ">
              {TrendingData.map((item) => (
                <Card
                  image={item?.image}
                  id={item?.id}
                  title={item?.title}
                  key={item?.image}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h1>Popular Movies</h1>
          {PopularData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="flex flex-wrap ">
              {PopularData.map((item) => (
                <Card
                  image={item?.image}
                  id={item?.id}
                  title={item?.title}
                  key={item?.image}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h1>Toprated Movies</h1>
          {TopratedData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="flex flex-wrap ">
              {TopratedData.map((item) => (
                <Card
                  image={item?.image}
                  id={item?.id}
                  title={item?.title}
                  key={item?.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
