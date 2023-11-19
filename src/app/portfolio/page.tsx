import Card from "@/components/common/Card";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A list of all my personal projects i made to showcase in my portfolio.",
};

const Portfolio = () => {
  return (
    <div className=" min-h-screen bg-indigo-100 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl rounded-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center  max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-5xl py-10 italic text-indigo-500 dark:text-indigo-300 , font-bold font-serif animate-pulse">
            My Portfolio
          </h2>
          <Card />
          <div className="pb-32 flex justify-center ">
            <Link href="/">
              <button className="hover:bg-indigo-600 dark:bg-indigo-400 text-white bg-indigo-400 font-serif text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
                Home
              </button>
            </Link>
            <Link href="/skills">
              <button className=" mx-5 hover:bg-indigo-600 font-serif dark:bg-indigo-400 text-white bg-indigo-400 text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
                Skills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
