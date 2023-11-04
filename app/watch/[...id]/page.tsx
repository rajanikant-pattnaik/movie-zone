"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "next/navigation";
import {
  getSimilarTVorMovies,
  getTVorMovieDetailsByID,
  getTVorMovieVideosByID,
} from "@/utils/fetchData";
import { MovieCard, details } from "@/Types";
import Loader from "@/components/Loader";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

const Page = () => {
  const params = useParams();
  const [key, setKey] = useState<string>("");
  const [details, setDetails] = useState<details>();
  const [data, setData] = useState<MovieCard[] | undefined>();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res1 = await getTVorMovieDetailsByID(params.id[0], params.id[1]);
        const res2 = await getTVorMovieVideosByID(params.id[0], params.id[1]);
        const res3 = await getSimilarTVorMovies(params.id[0], params.id[1]);
        setDetails(res1);
        setKey(res2);
        setData(res3);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };
    fetchDetails();
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-2/3 p-4">
          {details === null ? (
            <Loader />
          ) : (
            <div>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${
                  key ? key : "LXb3EKWsInQ"
                }`}
                controls
                width="100%"
              />
              <h1 className="text-4xl font-bold mt-4 text-red-900 mb-4">{details?.title}</h1>
              <p className="text-red-400">{details?.overview}</p>
            </div>
          )}
        </div>
        <div className="w-1/3 p-4">
          {data === undefined ? (
            <Loader />
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-4">
                Similar {params.id[0]} are
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {data.map((item) => (
                  <Card
                    image={item?.image}
                    title={item?.title}
                    id={item?.id}
                    type={item?.type}
                    key={item?.image}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
