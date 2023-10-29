"use client";
import { Props } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card: React.FC<Props> = ({ image, title, id, type }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <Link href={`/watch/${type}/${id}`}>
      <Image src={`${baseUrl}${image}`} alt="media" height={200} width={250} />
      <p>{title}</p>
    </Link>
  );
};

export default Card;
