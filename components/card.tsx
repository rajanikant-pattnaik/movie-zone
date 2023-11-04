import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Props } from "@/Types";

const Card: React.FC<Props> = ({ image, title, id, type }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link href={`/watch/${type}/${id}`}>
      <div className="m-2 p-2 bg-gray-800 rounded-lg shadow-md">
        <div className="relative">
          <Image
            src={`${baseUrl}${image}`}
            alt="media"
            width={250}
            height={250}
          />
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold text-white">
            {title?.length
              ? `${title.length > 30 ? title.substring(0, 30) : title}`
              : "no title"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
