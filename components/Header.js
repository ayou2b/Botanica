"use client";
import React, { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { UilBars, UilTimes } from "@iconscout/react-unicons";

function Header() {
  const pathname = usePathname();

  const [header_bg, setHeader_bg] = useState();

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (
      pathname === "/media" ||
      pathname === "/donation" ||
      pathname === "/event-read-more"
    ) {
      setHeader_bg("bg-[#EFF7F2]");
    }

    if (pathname === "/contact") {
      setHeader_bg("bg-[#EBF0F9]");
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileMenu]);

  return (
    <Fragment>
      <header
        className={`${header_bg} px-12 transition-all sm:px-14 md:px-16 lg:px-20 xl:px-24 py-10  h-[10vh] flex items-center justify-between`}
      >
        <h3 className="text-[18px] uppercase text-[#70C174] font-semibold">
          <Link href="/">Botanica</Link>
        </h3>

        <ul className=" items-center gap-14 font-medium hidden lg:flex">
          <li
            className={`${
              pathname === "/" ? "text-[#70C174]" : "text-[#525560]"
            } hover:text-[#70C174]`}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={`${
              pathname === "/about-us" ? "text-[#70C174]" : "text-[#525560]"
            } hover:text-[#70C174]`}
          >
            <Link href="/about-us">About us</Link>
          </li>

          <li
            className={`${
              pathname === "/what-we-do" ? "text-[#70C174]" : "text-[#525560]"
            } hover:text-[#70C174]`}
          >
            <Link href="/what-we-do">What We Do</Link>
          </li>

          <li
            className={`${
              pathname === "/media" ? "text-[#70C174]" : "text-[#525560]"
            } hover:text-[#70C174]`}
          >
            <Link href="/media">Media</Link>
          </li>

          <li
            className={`${
              pathname === "/contact" ? "text-[#70C174]" : "text-[#525560]"
            } hover:text-[#70C174]`}
          >
            <Link href="/contact">Contact</Link>
          </li>

          <li className="hover:scale-95 duration-200">
            <Link
              href="/donation"
              className={`px-6 py-3  shadow-4xl rounded-md bg-[#1D2130] text-white font-medium hover:bg-[#70C174]  hover:text-white`}
            >
              Donate
            </Link>
          </li>
        </ul>

        <UilBars
          className="block lg:hidden"
          onClick={() => {
            setMobileMenu(true);
          }}
        ></UilBars>

        <div
          className={`${
            mobileMenu === true ? "block" : "hidden"
          } w-full h-[100vh] absolute top-0 left-0  bg-white text-black p-14 z-50`}
        >
          <ul className="items-start gap-14 font-medium flex flex-col">
            <li
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`${
                pathname === "/" ? "text-[#0B0706]" : "text-[#525560]"
              }`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`${
                pathname === "/about-us" ? "text-[#0B0706]" : "text-[#525560]"
              }`}
            >
              <Link href="/about-us">About us</Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`${
                pathname === "/what-we-do" ? "text-[#0B0706]" : "text-[#525560]"
              }`}
            >
              <Link href="/what-we-do">What We Do</Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`${
                pathname === "/media" ? "text-[#0B0706]" : "text-[#525560]"
              }`}
            >
              <Link href="/media">Media</Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`${
                pathname === "/contact" ? "text-[#0B0706]" : "text-[#525560]"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>

            <li
              className="hover:scale-95 duration-200"
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/donation"
                className="px-6 py-3  shadow-4xl rounded-md bg-[#1D2130] text-white font-medium"
              >
                Donate
              </Link>
            </li>
          </ul>

          <UilTimes
            onClick={() => {
              setMobileMenu(false);
            }}
            className={`right-10 top-10 absolute`}
          ></UilTimes>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
