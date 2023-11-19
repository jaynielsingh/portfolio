import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
export default function Home() {
  return (
    <main className=" min-h-screen dark:bg-slate-900 bg-indigo-100">
      <div className="relative isolate px-6 pt-62  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <p className="flex  justify-end p-3 mb-8 rounded-full font-serif text-white  font-light my-4 w-fit bg-indigo-500 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600   animate-pulse">
            Design. Develope. Deploy.
          </p>
          <div className="text-center">
            <h1 className="text-4xl text-indigo-700 mt-17  dark:text-indigo-300 font-serif  antialiased font-bold tracking-tight sm:text-6xl">
              Hi I&apos;m{" "}
              {/* <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text animate-pulse"> */}
                Jayniel Singh
              {/* </span> */}
            </h1>
            <p className="mt-8 text-lg leading-8 capitalize font-serif text-black dark:text-white ">
              A Freelance web developer Helping you bring your ideas to the web.
            </p>
            <div className="mt-10 flex font-serif items-center justify-center gap-x-6">
              <Link
                prefetch
                href="/about"
                className="rounded-md bg-indigo-700 dark:bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-cyan-700/50 shadow-xl hover:bg-indigo-500 dark:hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                About Me
              </Link>
              <Link
                prefetch
                href="/portfolio"
                className="rounded-md bg-indigo-900 dark:bg-indigo-200 dark:text-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-cyan-700/50 shadow-xl hover:bg-indigo-500 dark:hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
              >
                My Portfolio <span aria-hidden="true"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden dark:blur-3xl blur-xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80f9ff] to-[#edfc89] opacity-50 sm:left-[calc(20%+26rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 87.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex md:flex-col  justify-center gap-12 text-indigo-700 dark:text-indigo-300 text-3xl ">
          <Link href="https://github.com/jaynielsingh">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/freelancer_jay/">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/jayniel-singh">
            <FaLinkedin />
          </Link>
          <Link href="Tel:510-415-8251">
            <FaPhone />
          </Link>
          <Link href="mailto: jaynielsingh@yahoo.com">
            <MdOutlineEmail />
          </Link>
        </div>
      </div>
    </main>
  );
}
