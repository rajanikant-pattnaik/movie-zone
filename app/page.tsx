"use client";
import { MovieCard } from "@/Types";
import BannerSlider from "@/components/BannerSlider";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import {
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
} from "@/utils/fetchData";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";
import { genreArray } from "@/utils/constants";
export default function Home() {
  const [TrendingData, setTrendingData] = useState<[MovieCard]>([undefined]);
  const [PopularData, setPopularData] = useState<[MovieCard]>([undefined]);
  const [TopratedData, setTopratedData] = useState<[MovieCard]>([undefined]);
  const [genre, setGenre] = useState<String>("movie");
  useEffect(() => {
    const fetcData = async () => {
      let res = await getTrendingMedias(genre);
      let newData = res.results;
      setTrendingData(
        newData?.map((item: any) => {
          return {
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: `${genre === "movie" ? "movie" : "tv"}`,
          };
        })
      );
      res = await getTopratedMedias(genre);
      newData = res.results;
      setTopratedData(
        newData?.map((item: any) => {
          return {
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: `${genre === "movie" ? "movie" : "tv"}`,
          };
        })
      );
      res = await getPopularMedias(genre);
      newData = res.results;
      setPopularData(
        newData?.map((item: any) => {
          return {
            image: item.poster_path,
            id: item.id,
            title: item.title,
            type: `${genre === "movie" ? "movie" : "tv"}`,
          };
        })
      );
    };
    fetcData();
  }, [genre]);
  return (
    <>
      <Navbar />
      <SideBar array={genreArray} genre={genre} setGenre={setGenre} />
      <div className=" relative z-10">
        <div>
          <h1>Trending Movies</h1>
          {TrendingData[0] === undefined ? (
            <div>No Data</div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {/* <BannerSlider BannerData={TrendingData} /> */}
              {TrendingData?.map((item) => (
                <Card
                  image={item?.image}
                  title={item?.title}
                  id={item?.id}
                  type={item?.type}
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
            <div className="flex flex-wrap justify-center">
              {/* <BannerSlider BannerData={PopularData} /> */}
              {PopularData?.map((item) => (
                <Card
                  image={item?.image}
                  title={item?.title}
                  id={item?.id}
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
            <div className="flex flex-wrap justify-center">
              {/* <BannerSlider BannerData={TopratedData} /> */}
              {TopratedData?.map((item) => (
                <Card
                  image={item?.image}
                  title={item?.title}
                  id={item?.id}
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
