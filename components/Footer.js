import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#0B0706] py-16 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center gap-10 text-center lg:text-start lg:flex-row lg:items-start lg:justify-between w-full">
      <h3 className="text-[18px] uppercase text-[#70C174] font-semibold">
        <Link href="/">Botanica</Link>
      </h3>

      <ul className="flex flex-col gap-6">
        <li className="font-semibold text-[18px] text-white">Our team</li>
        <li className="text-[#525560] hover:text-white duration-200">
          <Link href="/about-us">About us</Link>
        </li>

        <li className="text-[#525560]  hover:text-white duration-200">
          <Link href="what-we-do">What we do</Link>
        </li>
        <li className="text-[#525560]  hover:text-white duration-200">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-6">
        <li className="font-semibold text-[18px] text-white">More</li>
        <li className="text-[#525560]  hover:text-white duration-200">
          <Link href="#">Events</Link>
        </li>

        <li className="text-[#525560]  hover:text-white duration-200">
          <Link href="/donation">Donate</Link>
        </li>
        <li className="text-[#525560]  hover:text-white duration-200">
          <Link href="#">Blog</Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-6">
        <li className="font-semibold text-[18px] text-white">Connect</li>
        <li className="text-[#525560]  hover:text-white duration-200 cursor-pointer">
          Facebook
        </li>
        <li className="text-[#525560]  hover:text-white duration-200 cursor-pointer">
          Twitter
        </li>
        <li className="text-[#525560]  hover:text-white duration-200 cursor-pointer">
          Linkdin
        </li>
      </ul>

      <div className="flex flex-col gap-4">
        <h2 className="text-[25px] text-white font-semibold">
          Subscribe to get latest
          <br /> updates
        </h2>
        <form className="flex w-full flex-col gap-4 lg:flex-row lg:gap-0">
          <input
            placeholder="Your email"
            className="px-10 py-3 placeholder:text-center text-white lg:placeholder:text-start lg:rounded-r-none outline-none bg-transparent rounded-md border-[1px] border-[#949494]"
          ></input>
          <button className="px-8 py-3 rounded-md hover:bg-[#70C174] duration-200 hover:text-white bg-white text-black lg:rounded-l-none">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
