"use client";

import Image from "next/image";
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Hello</div>


      <CldUploadWidget uploadPreset="hjklhghjkkj">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}        
      </CldUploadWidget>
    </div>
  );
}
