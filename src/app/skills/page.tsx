import Link from "next/link";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoFlask,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoSass,
} from "react-icons/bi";
import { SiExpress, SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const features = [
  {
    name: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "Python",
    icon: BiLogoPython,
  },
  {
    name: "Flask",
    icon: BiLogoFlask,
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb,
  },
  {
    name: "ReactJs",
    icon: BiLogoReact,
  },
  {
    name: "ExpressJs",
    icon: SiExpress,
  },
  {
    name: "NodeJs",
    icon: BiLogoNodejs,
  },
  {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    name: "HTML",
    icon: BiLogoHtml5,
  },
  {
    name: "CSS",
    icon: BiLogoCss3,
  },
  {
    name: "SASS",
    icon: BiLogoSass,
  },
  {
    name: "TailwindCSS",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Bootstrap",
    icon: BiLogoBootstrap,
  },
  {
    name: "Material UI",
    icon: SiMui,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-indigo-100 dark:bg-slate-900  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center font-serif text-black dark:text-white">
          <p className="mt-2 text-4xl font-bold tracking-tight capitalize animate-pulse text-indigo-500 dark:text-indigo-300 italic text-center">
            Skills
          </p>
          {/* <p className="mt-6 text-lg leading-8 tracking-wide capitalize">
            These are the languages i speak and frameworks i use
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-14 font-serif ">
                <dt className="text-base font-semibold leading-7  text-black dark:text-white  mt-2">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg  dark:bg-indigo-300 bg-indigo-700">
                    <feature.icon
                      className="h-7 w-7 text-white dark:text-black"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="py-32 flex justify-center font-serif">
        <Link href="/">
          <button className="hover:bg-indigo-600 dark:bg-indigo-400 text-white bg-indigo-400 text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
            Home
          </button>
        </Link>
        <Link href="/portfolio">
          <button className=" mx-5 hover:bg-indigo-600 dark:bg-indigo-400 text-white bg-indigo-400 text-lx p-4 mt-20 rounded-3xl px-10 w-fit">
            Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
