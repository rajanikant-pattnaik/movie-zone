"use client";
import { MovieCard } from "@/Types";
import Navbar from "@/components/Navbar";
import { getTVorMoviesByGenre } from "@/utils/fetchData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [mysteryData, setMysteryData] = useState<[MovieCard] | undefined>([
    undefined,
  ]);
  const [actionSdventureData, setActionSdventureData] = useState<
    [MovieCard] | undefined
  >([undefined]);
  const [crimeData, setCrimeData] = useState<[MovieCard] | undefined>([
    undefined,
  ]);
  const [comedyData, setComedyData] = useState<[MovieCard] | undefined>([
    undefined,
  ]);
  const [familyData, setFamilyData] = useState<[MovieCard] | undefined>([
    undefined,
  ]);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const getAllData = async () => {
      const actionAdventure: [MovieCard] | undefined =
        await getTVorMoviesByGenre("tv", 10759);
      const crime = await getTVorMoviesByGenre("tv", 80);
      const comedy = await getTVorMoviesByGenre("tv", 35);
      const family = await getTVorMoviesByGenre("tv", 10751);
      const mystery = await getTVorMoviesByGenre("tv", 9648);
      setActionSdventureData(actionAdventure);
      setCrimeData(crime);
      setComedyData(comedy);
      setFamilyData(family);
      setMysteryData(mystery);
    };
    getAllData();
  }, []);
  return (
    <div>
      <Navbar />
      {crimeData === undefined ? (
        <div>No data</div>
      ) : (
        <div>
          <div>
            <h1>Top mystery</h1>
            <div className="flex flex-wrap ">
              {mysteryData?.map((item) => (
                <div key={item?.image}>
                  <Image
                    src={`${baseUrl}${item?.image}`}
                    alt="media"
                    height={200}
                    width={250}
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>Top action adventure</h1>
            <div className="flex flex-wrap ">
              {actionSdventureData?.map((item) => (
                <div key={item?.image}>
                  <Image
                    src={`${baseUrl}${item?.image}`}
                    alt="media"
                    height={200}
                    width={250}
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>Top comedy</h1>
            <div className="flex flex-wrap ">
              {comedyData?.map((item) => (
                <div key={item?.image}>
                  <Image
                    src={`${baseUrl}${item?.image}`}
                    alt="media"
                    height={200}
                    width={250}
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>Top family</h1>
            <div className="flex flex-wrap ">
              {familyData?.map((item) => (
                <div key={item?.image}>
                  <Image
                    src={`${baseUrl}${item?.image}`}
                    alt="media"
                    height={200}
                    width={250}
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>Top crime</h1>
            <div className="flex flex-wrap ">
              {crimeData?.map((item) => (
                <div key={item?.image}>
                  <Image
                    src={`${baseUrl}${item?.image}`}
                    alt="media"
                    height={200}
                    width={250}
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;