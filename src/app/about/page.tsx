import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "A little about my self explaining what i do.",
};

const About = () => {
  return (
    <div className="min-h-screen py-52 flex p-10 justify-center items-center text-center  dark:bg-slate-900 bg-indigo-100">
      <div>
        <Image
          src="/my-logo-light.png"
          alt="about logo"
          height={150}
          width={150}
          loading="lazy"
          className="rounded-full shadow-2xl dark:shadow-gray-300 my-8 mx-auto"
        />
        <div>
          <h1 className="text-5xl text-center py-10 text-indigo-500 italic dark:text-indigo-300 font-serif capitalize animate-pulse ">
            About me
          </h1>
          <h2 className="text-center tracking-wide antialiased font-semibold w-96 dark:text-white text-black font-serif text-lg leading-8">
            I am a highly motivated professional with a strong background in web
            development. I specialize in creating user-friendly, responsive
            websites that help businesses thrive in the digital world. With a
            passion for innovation and a commitment to excellence, I&apos;m
            dedicated to delivering the best solutions for my clients.
          </h2>
        </div>
        <div className="font-serif">
          <Link href="/">
            <button className="hover:bg-indigo-600 dark:bg-indigo-400 text-white bg-indigo-400 text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
              Home
            </button>
          </Link>
          <Link href="/portfolio">
            <button className=" mx-5 hover:bg-indigo-600 dark:bg-indigo-400 text-white bg-indigo-400 text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
              My Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
