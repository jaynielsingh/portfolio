import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-black dark:text-white  dark:bg-slate-900 bg-indigo-100">
        <p className=" p-5 font-serif  dark:text-white">
          © {new Date().getFullYear()} Jayniel Singh
        </p>
      </footer>
    </div>
  );
};

export default Footer;
