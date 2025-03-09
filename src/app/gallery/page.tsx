import React from "react";
import UploadButton from "./upload-button";

const page = () => {
  return (
    <div className="flex flex-row justify-between h-[200vh] sticky top-20  ">
      <h1 className="text-4xl font-semibold tracking-wide ">Gallery</h1>
      <UploadButton />
    </div>
  );
};

export default page;
