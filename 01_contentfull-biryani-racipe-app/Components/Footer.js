import Link from "next/link";
import React from "react";
// import { Envelope, Twitter, Linkedin } from "./icons/";

const Footer = () => {
  return (
    <div className="flex flex-col bg-lime-400 w-auto h-[300px] items-center pt-10 ">
      <div className="flex flex-row text-gray-600 space-x-8 text-3xl m-2  ">
        <Link
          className="hover:text-gray-400 duration-300"
          href={"mailto:emailto:afrazahmad313@gmail.com"}
          aria-label={"Envelope Link"}
        >
          {/* <Envelope /> */}
          Email
        </Link>
        <Link
          className="hover:text-gray-400 duration-300"
          href={"https://twitter.com/frazi313"}
          aria-label={"Twitter Link"}
        >
          {/* <Twitter /> */}
          Twitter
        </Link>
        <Link
          className="hover:text-gray-400 duration-300"
          href={"https://www.linkedin.com/in/afraz-ahmad-5b80a0174/"}
          aria-label={"Linkedin Link"}
        >
          {/* <Linkedin /> */}
          Linkedin
        </Link>
      </div>
      <div className="w-40 h-[2px] bg-slate-300"></div>
      <div className=" flex flex-col mt-8 ">
        <p className="text-gray-600 text-center text-lg">
          All Rights Reserved &copy; 2023
        </p>
        <p className="text-gray-600 text-center text-xl  ">
          Afraz Ahmad
          <spam className="text-red-500 text-2xl"> &#9829;</spam>
        </p>
        <p className="text-gray-600 text-center mt-10 ">
          Legals | Terms of Use | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
