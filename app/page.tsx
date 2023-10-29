"use client";
import { MovieCard } from "@/Types";
import BannerSlider from "@/components/BannerSlider";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import {
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
} from "@/utils/fetchData";
import { useEffect, useState } from "react";

export default function Home() {
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
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: "movie",
          };
        })
      );
      res = await getTopratedMedias("movie");
      newData = res.results;
      setTopratedData(
        newData?.map((item: any) => {
          return {
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: "movie",
          };
        })
      );
      res = await getPopularMedias("movie");
      newData = res.results;
      setPopularData(
        newData?.map((item: any) => {
          return {
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: "movie",
          };
        })
      );
    };
    fetcData();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" relative z-10">
        <div>
          <h1>Trending Movies</h1>
          {TrendingData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="">
              <BannerSlider BannerData={TrendingData} />
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
                  type={item?.type}
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
                  type={item?.type}
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
