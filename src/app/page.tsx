"use client";

import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-7xl font-bold tracking-wide">Welcome !</div>

      <Link href="/gallery" className="underline text-blue-500 text-lg">
        Go to Gallery
      </Link>
      {/* <CldUploadButton uploadPreset="hjklhghjkkj" /> */}
    </div>
  );
}
