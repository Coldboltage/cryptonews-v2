import React from "react";

const PostItem = ({ title, index, url, publishedAt, source: { name } }) => {
  return (
    <div className="pb-10">
      <p>
        {new Date(publishedAt).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        / Source: {name}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

export default PostItem;
