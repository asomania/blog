import React from "react";

type Props = {
  htmlString: string;
};

const ImgBlogs = ({ htmlString }: Props) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const img = doc.querySelector("img");

  if (!img) return null;

  const src = img.getAttribute("src");
  const width = parseInt(img.getAttribute("width") || "0", 10);
  const height = parseInt(img.getAttribute("height") || "0", 10);

  if (!src || (width <= 1 && height <= 1)) return null;

  return (
    <img
      src={src}
      alt={img.getAttribute("alt") ?? undefined}
      className="blog-small-image"
    />
  );
};

export default ImgBlogs;
