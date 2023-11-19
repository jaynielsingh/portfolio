import Image from "next/image";
import React from "react";

const Card = () => {
  const projects = [
    {
      name: "E & B Carpet Company",
      description:
        "A website made for a carpet company made with Next.js, TailwindCSS and Typescript",
      imageSrc: "/carpet-bg.jpg",
      imageAlt: "Red carpet rolled standing up",
      href: "https://carpet-company.vercel.app",
    },
    {
      name: "Note Keeper",
      description:
        "A google note clone made with ReactJs, Typescript, TailwindCss and ViteJs.",
      imageSrc: "/note-keeper.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "https://fabulous-sprinkles-8d43dc.netlify.app/",
    },
    {
      name: "Kavaify",
      description:
        "An web design company website made with ReactJs, Material UI, Javascript, and ExpressJs deployed with Heroku",
      imageSrc: "/kavaify.jpg",
      imageAlt: "image of a morse code learning and practice.",
      href: "https://kavaify.herokuapp.com",
    },
    {
      name: "Weather Pro",
      description:
        "An weather app made with Python and Flask. Has authentication and can send SMS weather alert using Twilio only if the user authenticated.",
      imageSrc: "/weather-pro.jpg",
      imageAlt: "an image with bus parked in snow",
      href: "https://jayniel-weather-pro.herokuapp.com",
    },
    {
      name: "BlackJack",
      description: "An simple game of BlackJack made with python",
      imageSrc: "/black-jack.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "https://github.com/jaynielsingh/BlackJack",
    },
    {
      name: "Morse Code",
      description: "A morse code decoder made with Python",
      imageSrc: "/morse-code.jpg",
      imageAlt: "image of a morse code learning and practice.",
      href: "https://github.com/jaynielsingh/Morse_Code",
    },
  ];

  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {projects.map((project) => (
        <div key={project.name} className="group relative">
          <div className="relative h-80 w-full shadow-2xl shadow-slate-800 dark:shadow-slate-400 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <Image
              width={300}
              height={300}
              src={project.imageSrc}
              alt={project.imageAlt}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <h3 className="mt-6 font-serif font-extrabold text-black dark:text-white text-sm">
            <a href={project.href}>
              <span className="absolute inset-0" />
              {project.name}
            </a>
          </h3>
          <p className="text-base font-serif my-4 font-medium  leading-8 tracking-wide text-black dark:text-white">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
