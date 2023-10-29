"use client";
import { details } from "@/Types";
import Loader from "@/components/Loader";
import {
  getTVorMovieDetailsByID,
  getTVorMovieVideosByID,
} from "@/utils/fetchData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Page = () => {
  const params = useParams();
  const [key, setkey] = useState("");
  const [details, setDetails] = useState<details>();
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getTVorMovieDetailsByID(params.id[0], params.id[1]);
      const r1 = await getTVorMovieVideosByID(params.id[0], params.id[1]);
      console.log(res);
      console.log(r1);
      setDetails(res);
      setkey(r1);
    };
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      {details === undefined ? (
        <Loader />
      ) : (
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${key ? key : "LXb3EKWsInQ"}`}
          />
          <h1>{details?.title}</h1>
          <h1>{details?.overview}</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
