import React from "react";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import Refresh from "./refresh-button";

type searchResult = {
  resources: {
    public_id: string;
    url: string;
  }[];
};



const page = async () => {
  let results;
  try {
    results = (await cloudinary.v2.search
      .expression("resource_type:image")
      .sort_by("public_id", "asc")
      .max_results(30)
      .execute()) as searchResult;
    // console.log("Images fetched:", results.resources);
  } catch (error) {
    console.error("Error fetching images:", error);
    results = { resources: [] }; // fallback option
  }

  return (
    <section className="w-full">
      <div className="flex flex-row h-24 justify-between sticky top-18 mb-2 bg-black items-center">
        <h1 className="text-4xl font-semibold tracking-wide">Gallery</h1>
        <div className="flex gap-4">
        <Refresh />
        <UploadButton />
        </div>
        
      </div>

      {
        <div className="columns-3xs gap-4">
          {results.resources.map((image) => (
            <img
              key={image.public_id}
              src={image.url}
              alt={image.public_id}
              className="mb-3"
            />
          ))}
        </div>
      }


    </section>
  );
};

export default page;
