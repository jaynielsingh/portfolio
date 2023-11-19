"use client";
import React, { lazy, useEffect } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Portfolio", href: "/portfolio" },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className=" dark:bg-slate-900  dark:text-white bg-indigo-100">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="flex sticky  items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-black dark:text-white p-2 font-mono text-xl  font-semibold italic tracking-wide">Jayniel Singh</h1>
              {/* <Image
                className="rounded-full"
                src="/my-logo-light.png"
                alt="my logo"
                width={100}
                height={80}
              /> */}
            </Link>
          </div>
          <div className="flex items-center px-10">
            <button
              onClick={toggleTheme}
              className="bg-indigo-400 rounded-full p-2 font-bold"
            >
              {isDarkMode ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6 " />
              )}
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-black dark:text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden font-serif lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm dark:text-white text-black font-semibold leading-6 "
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 "
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 text-black w-9" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 font-serif py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
