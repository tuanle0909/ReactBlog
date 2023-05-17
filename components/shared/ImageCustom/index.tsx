import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

export default function ImageCustom({ src, alt, width, height }: Props) {
  return (
    <Image
      src={src || "/images/avatar1.jpg"}
      width={width}
      height={height}
      alt={alt || ""}
      onError={({ currentTarget }) => {
        currentTarget.src = "/images/avatar1.jpg";
        currentTarget.onerror = null;
      }}
    ></Image>
  );
}
