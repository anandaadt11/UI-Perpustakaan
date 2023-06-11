import React from "react";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";

const Details = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-10 ">
          <Link
            href="/dashboard"
            className="flex gap-3 mb-5 text-sky-500 hover:text-sky-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Back
          </Link>
          <div className="flex">
            <Image
              src="/images/book1.webp"
              width={300}
              height={300}
            />
            <div className="mx-10">
              <h1 className="text-black text-3xl font-bold">
                The mind of Leader
              </h1>
              <p>Author : Noah Schumer</p>
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
