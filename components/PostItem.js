import React from "react";
import Image from "next/image";
import placeholder from "../image/placeholder.png";

const PostItem = ({
  urlToImage,
  title,
  index,
  url,
  publishedAt,
  source: { name },
}) => {
  return (
    <div className="grid grid-cols-4 gap-5 mb-10">
      {/* Picture Side */}
      <div className="col-span-1">
        <a href={url}>
          <img
            src={urlToImage === null ? placeholder.src : urlToImage}
            alt={title}
            width={200}
            height={200}
          ></img>
        </a>
      </div>
      {/* Information side */}
      <div className="pb-10 col-span-3">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p className="text-xs pt-2">
          {new Date(publishedAt).toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          / Source: {name}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
