"use client";
import { MovieCard } from "@/Types";
import Navbar from "@/components/Navbar";
import Card from "@/components/Cardi";
import { getTVorMovieSearchResults } from "@/utils/fetchData";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [tvData, setTvData] = useState<[MovieCard] | undefined>([undefined]);
  const [movieData, setMovieData] = useState<[MovieCard] | undefined>([
    undefined,
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const tvResult = await getTVorMovieSearchResults("tv", params.query);
      const movieResult = await getTVorMovieSearchResults(
        "movie",
        params.query
      );
      console.log(tvResult);
      console.log(movieResult);
      setTvData(tvResult);
      setMovieData(movieResult);
    };
    fetchData();
  }, [params.query]);
  return (
    <div>
      <Navbar />
      <div>
        <h1>Tv search results</h1>
        {tvData === undefined ? (
          <div>No User</div>
        ) : (
          <div className="flex flex-wrap ">
            {tvData?.map((item) => (
              <Card
                image={item?.image}
                id={item?.id}
                title={item?.title}
                key={item?.image}
                type={"tv"}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <h1>Movie search results</h1>
        {movieData === undefined ? (
          <div>No User</div>
        ) : (
          <div className="flex flex-wrap ">
            {movieData?.map((item) => (
              <Card
                image={item?.image}
                id={item?.id}
                title={item?.title}
                key={item?.image}
                type={"movie"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
