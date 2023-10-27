"use client";
import Image from "next/image";
import React from "react";

type Props = {
  image: String | undefined;
  id: Number | undefined;
  title: String | undefined;
};
const Card: React.FC<Props> = ({ image, title, id }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <Image src={`${baseUrl}${image}`} alt="media" height={200} width={250} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
