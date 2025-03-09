import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-items-center min-h-screen py-8 pb-20 gap-4 ">
        <div className="text-[9vw] font-bold tracking-wide">Man at Work!</div>

        <Link href="/gallery" className="underline text-blue-500 text-lg">
          Go to Gallery
        </Link>
      </div>
    </div>
  );
};

export default page;
