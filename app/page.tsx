"use client";
import { MovieCard } from "@/Types";
import BannerSlider from "@/components/BannerSlider";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import { RootState } from "@/state/store";
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
      <div className=" relative z-10">
        <div>
          <h1>Trending Movies</h1>
          {TrendingData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="">
              {/* {TrendingData.map((item) => (
                <Link
                  href={`/watch/movie/${item?.id}`}
                  key={item?.image}
                  className="cursor-pointer"
                >
                  <Card image={item?.image} id={item?.id} title={item?.title} />
                </Link>
              ))} */}
              <BannerSlider BannerData={TrendingData}/>
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
