"use client";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { UilCheck } from "@iconscout/react-unicons";

import hero_image from "/./public/images/landing_page/kendal-hnysCJrPpkc-unsplash.jpg";
import image_1 from "/./public/images/landing_page/james-wheeler-RRZM3cwS1DU-unsplash.jpg";

import logo_1 from "/./public/images/logos/Logo.png";
import logo_2 from "/./public/images/logos/Logo_1.png";
import logo_3 from "/./public/images/logos/Logo_2.png";
import logo_4 from "/./public/images/logos/Logo_3.png";
import logo_5 from "/./public/images/logos/Logo_4.png";
import logo_6 from "/./public/images/logos/Logo_5.png";

import icon_1 from "/./public/images/landing_page/Icon.png";
import icon_2 from "/./public/images/landing_page/Icon_1.png";
import icon_3 from "/./public/images/landing_page/Icon_2.png";
import icon_4 from "/./public/images/landing_page/Icon_3.png";

import image_2 from "/./public/images/landing_page/annie-spratt-B5PcDNbMu0M-unsplash.jpg";
import image_3 from "/./public/images/landing_page/markus-winkler-vgR08PPx6Es-unsplash.jpg";
import image_4 from "/./public/images/landing_page/octav-cado-8Dgb-q_vB_E-unsplash.jpg";

import image_5 from "/./public/images/landing_page/v2osk-1Z2niiBPg5A-unsplash.jpg";

import image_6 from "/./public/images/landing_page/jed-owen-1JgUGDdcWnM-unsplash.jpg";
import image_7 from "/./public/images/landing_page/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";
import image_8 from "/./public/images/landing_page/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import image_9 from "/./public/images/landing_page/boxed-water-is-better-rkH3k-_rwvw-unsplash.jpg";

import arrow from "/./public/images/landing_page/Arrow.png";

import { UilBars, UilTimes } from "@iconscout/react-unicons";

export default function Home() {
  const pathname = usePathname();

  const [header_bg, setHeader_bg] = useState();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [popUp, setPopUp] = useState(false);

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
        className={`${header_bg} px-12 transition-all sm:px-14 md:px-16 lg:px-20 xl:px-24 py-10  h-[10vh] flex items-center justify-center`}
      >
        <div className="w-full 2xl:max-w-[1300px] flex items-center justify-between">
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
                  pathname === "/what-we-do"
                    ? "text-[#0B0706]"
                    : "text-[#525560]"
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
        </div>
      </header>

      <section
        className="w-full h-[90vh] text-white p-12 sm:p-14 md:p-16 lg:p-20 xl:p-24 mb-20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero_image.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full 2xl:max-w-[1300px] text-center flex flex-col items-center gap-10 lg:gap-40 justify-center lg:text-start lg:items-start">
          <div className="flex flex-col transition-all gap-6 lg:gap-10 ">
            <h1 className="text-[35px] 2xl:text-[50px] font-bold">
              Save the environment
              <br /> today for a better
              <br /> tomorrow
            </h1>
            <Link
              href="/what-we-do"
              className="px-8 py-3 bg-white text-black font-semibold rounded-md lg:w-fit hover:scale-95 duration-200"
            >
              What we do
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 lg:flex-row lg:w-full lg:justify-between lg:items-center lg:gap-20">
            <p className="w-fit whitespace-nowrap">23,800 trees planted</p>
            <div className="w-full h-[2px] bg-white hidden lg:block"></div>
            <p className="w-fit whitespace-nowrap">5840 donations collected</p>
          </div>
        </div>
      </section>

      <section className="text-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20  lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start gap-10 max-w-lg transition-all">
            <span className="text-[#1D2130] uppercase flex items-center gap-6 font-semibold">
              Know About us
              <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
            </span>
            <h2 className="text-[30px] text-[#1D2130] font-bold">
              We help nature smile and survive everywhere
            </h2>
            <p className="leading-7 text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p className="leading-7 text-[#525560]">
              ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            <Link
              href="/project-read-more"
              className="px-8 py-3 rounded-md bg-[#70C174] text-white hover:scale-95 shadow-3xl duration-200"
            >
              Learn more
            </Link>
          </div>

          <Image
            src={image_1}
            alt=""
            className="rounded-md sm:w-[400px] sm:h-[500px] lg:max-h-[600px] lg:max-w-[500px]  object-cover"
          ></Image>
        </div>
      </section>

      <section className="text-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-10">
          <div className="flex items-center lg:w-full gap-6">
            <span className="text-[#1D2130] font-semibold whitespace-nowrap uppercase">
              our Supporters
            </span>
            <div className="h-[1.5px] w-full bg-[#E5E5E5] hidden lg:block"></div>
          </div>

          <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:place-items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between w-full">
            <Image src={logo_1} width={110} objectFit="cover" alt=""></Image>
            <Image src={logo_2} width={110} objectFit="cover" alt=""></Image>
            <Image src={logo_3} width={110} objectFit="cover" alt=""></Image>
            <Image src={logo_4} width={110} objectFit="cover" alt=""></Image>
            <Image src={logo_5} width={110} objectFit="cover" alt=""></Image>
            <Image src={logo_6} width={110} objectFit="cover" alt=""></Image>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7F2] w-full mb-20 text-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-20 flex  items-center justify-center  gap-10">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-12">
          <div className="flex flex-col gap-3 items-center max-w-lg">
            <span className="text-[#1D2130] uppercase flex items-center gap-6 font-semibold">
              What we do
            </span>
            <h2 className="text-[30px] text-[#1D2130] font-bold">
              We care for earth, care for the coming birth
            </h2>
            <p className="leading-7 text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between w-full gap-10">
            <div className="flex flex-col gap-3 items-center max-w-md">
              <Image src={icon_1} alt="" className="object-fill"></Image>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">
                  Build Healthy Cities
                </h3>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center max-w-md">
              <Image src={icon_2} alt="" className="object-fill"></Image>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">Tree Plantation</h3>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center max-w-md">
              <Image src={icon_3} alt="" className="object-fill"></Image>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">
                  Protect Land and Water
                </h3>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center max-w-md">
              <Image src={icon_4} alt="" className="object-fill"></Image>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">Animal Safety</h3>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center mb-20 lg:text-start">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="flex flex-col items-center mb-10 lg:items-start gap-4">
            <span className="text-[#1D2130] uppercase flex items-center gap-6 font-semibold">
              Projects we have done
              <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
            </span>
            <h2 className="text-[30px] text-[#1D2130] font-bold">
              We are Creating sustainable
              <br /> society, for everyone and
              <br /> forever.
            </h2>
          </div>

          <div className="flex w-full flex-col rounded-md transition-all items-center gap-10 lg:flex-row lg:justify-between">
            <div
              className=" h-80 w-full relative flex shadow-4xl items-center rounded-md  justify-center"
              style={{
                backgroundImage: `url(${image_2.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="z-30 absolute flex items-center lg:items-start max-w-md flex-col gap-3 p-7">
                <h3 className="text-[20px] font-semibold text-white">
                  Mission 40K: Tree plantation
                </h3>
                <p className="text-[#E5E5E5]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Link
                  href="/project-read-more"
                  className="px-8 py-3 bg-white rounded-md hover:bg-transparent hover:text-white hover:border-[2px] hover:px-7 hover:py-2 duration-200 mt-3"
                >
                  See more
                </Link>
              </div>
              <div className="top-0 left-0 absolute w-full h-full rounded-md bg-[rgb(0,0,0,60%)] z-0"></div>
            </div>

            <div
              className=" h-80 w-full relative shadow-4xl rounded-md  flex items-center justify-center"
              style={{
                backgroundImage: `url(${image_3.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="z-30 absolute flex items-center lg:items-start  max-w-md flex-col gap-3 p-7">
                <h3 className="text-[20px] font-semibold text-white">
                  Weekly cleanliness program in city
                </h3>
                <p className="text-[#E5E5E5]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Link
                  href="/project-read-more"
                  className="px-8 py-3 bg-white rounded-md hover:bg-transparent hover:text-white hover:border-[2px] hover:px-7 hover:py-2 duration-200 mt-3"
                >
                  See more
                </Link>
              </div>
              <div className="top-0 left-0 absolute w-full rounded-md h-full bg-[rgb(0,0,0,60%)] z-0"></div>
            </div>

            <div
              className=" h-80 w-full relative shadow-4xl rounded-md  flex items-center justify-center"
              style={{
                backgroundImage: `url(${image_4.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="z-30 absolute flex items-center lg:items-start  max-w-md flex-col gap-3 p-7">
                <h3 className="text-[20px] font-semibold text-white">
                  Wildlife safety program 2021
                </h3>
                <p className="text-[#E5E5E5]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Link
                  href="/project-read-more"
                  className="px-8 py-3 hover:bg-transparent hover:text-white hover:border-[2px] hover:px-7 hover:py-2 duration-200 bg-white rounded-md mt-3"
                >
                  See more
                </Link>
              </div>
              <div className="top-0 left-0 absolute w-full rounded-md h-full bg-[rgb(0,0,0,60%)] z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0706] w-full px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20 py-20 text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] lg:items-start flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center lg:items-start gap-4 max-w-lg">
            <h2 className="text-[30px] font-semibold text-white">
              How we spend your donations and where it goes
            </h2>
            <p className="text-[#E5E5E5] leading-7">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5 lg:flex-row w-full lg:justify-between">
            <span className="text-white flex items-center">
              <UilCheck></UilCheck> 40% planting trees
            </span>

            <span className="text-white flex items-center">
              <UilCheck></UilCheck> 35% cleanliness program
            </span>

            <span className="text-white flex items-center">
              <UilCheck></UilCheck> 10% helping people
            </span>

            <span className="text-white flex items-center">
              <UilCheck></UilCheck> 10% animal safety
            </span>

            <span className="text-white flex items-center">
              <UilCheck></UilCheck> 5% feeding the poor
            </span>
          </div>
        </div>
      </section>

      <section className="text-center transition-all w-full mb-20  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center">
        <div
          className="w-full 2xl:max-w-[1300px] h-80 rounded-md relative text-white flex items-center justify-center"
          style={{
            backgroundImage: `url(${image_5.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-30 absolute flex items-center p-4 flex-col gap-10">
            <h2 className="lg:text-[25px] text-[16px] font-semibold">
              You can contribute to make
              <br /> the environment greener!
            </h2>
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <button
                onClick={() => {
                  setPopUp(true);
                }}
                className="lg:px-8 lg:py-3 px-5 py-2  bg-[#70C174] hover:scale-95 duration-200 text-white rounded-md font-semibold"
              >
                Join as a volunteer
              </button>
              <Link
                href="/donation"
                className="lg:px-8 lg:py-3 px-5 py-2 hover:scale-95 duration-200 bg-white text-black rounded-md font-semibold"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="top-0 left-0 w-full h-full bg-[rgb(0,0,0,60%)] z-0 rounded-md"></div>
        </div>
      </section>

      <section className="mb-20 text-center px-12 sm:px-14 md:px-16 lg:text-start  lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start  gap-10">
          <div className="w-full flex flex-col items-center lg:items-start gap-3 max-w-md">
            <h2 className="text-[25px] font-semibold whitespace-nowrap">
              Read our Recent News
            </h2>
            <p>
              Edit this text to make it your own. To edit, simply click directly
              on the text to start We are served
            </p>
          </div>

          <div className="flex items-center flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start">
            <Link
              href="/blog-post"
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={image_6}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Don’t destroy greenery and don’t spoil scenery
                </h4>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={image_7}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Is climate change happening faster than expected?
                </h4>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={image_8}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Top 10 facts about wind farms you didn t know
                </h4>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={image_9}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Our goal is to make water available for everyone
                </h4>
                <p className="text-[#525560]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center lg:text-start mb-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-10">
          <div className="lg:w-full flex items-center gap-6">
            <h2 className="text-[25px] font-semibold whitespace-nowrap">
              Our Events
            </h2>
            <div className="h-[1.5px] w-full bg-[#E5E5E5] hidden lg:block"></div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
            <div className="bg-[#BEF3C0] w-full transition-all rounded-md p-5 flex items-center flex-col lg:flex-row lg:justify-between gap-7">
              <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5">
                <div className="flex items-center lg:items-start flex-col">
                  <h1 className="text-[35px] font-medium">23</h1>
                  <span className="text-[18px] font-medium uppercase">SEP</span>
                </div>

                <div className="flex flex-col gap-2 lg:mt-2">
                  <span className="text-[18px] uppercase font-semibold">
                    Next Events
                  </span>
                  <h3 className="text-[20px] font-bold">
                    Say no to plastic usage and
                    <br /> save the planet
                  </h3>
                </div>
              </div>

              <Link
                href="/event-read-more"
                className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center hover:scale-95 duration-200"
              >
                <Image src={arrow} alt="" objectFit="cover"></Image>
              </Link>
            </div>

            <div className="bg-[#BEF3C0] transition-all w-full rounded-md p-5 flex items-center flex-col lg:flex-row lg:justify-between gap-7">
              <div className="flex flex-col items-center lg:items-start lg:flex-row gap-5">
                <div className="flex items-center lg:items-start flex-col">
                  <h1 className="text-[35px] font-medium">23</h1>
                  <span className="text-[18px] font-medium uppercase">SEP</span>
                </div>

                <div className="flex flex-col gap-2 lg:mt-2">
                  <span className="text-[18px] uppercase font-semibold">
                    Next Events
                  </span>
                  <h3 className="text-[20px] font-bold">
                    Say no to plastic usage and
                    <br /> save the planet
                  </h3>
                </div>
              </div>

              <Link
                href="/event-read-more"
                className="bg-white w-[50px] h-[50px] rounded-full flex items-center hover:scale-95 duration-200 justify-center"
              >
                <Image src={arrow} alt="" objectFit="cover"></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B0706] py-16 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24  w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 text-center lg:text-start lg:flex-row lg:items-start lg:justify-between">
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
        </div>
      </footer>

      {popUp === true && (
        <section className="p-10 rounded-md max-w-md z-[1000] bg-white flex flex-col fixed top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] shadow-4xl gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-[#1D2130]">
              Join as a volunteer
            </h2>

            <p className=" text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
              varius enim in eros elementum tristique.
            </p>
          </div>

          <form className="w-full flex flex-col gap-5">
            <input
              placeholder="First Name"
              className=" py-3 w-full outline-none  placeholder:text-center lg:placeholder:text-start placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
            ></input>
            <input
              placeholder="Last Name"
              className=" py-3 w-full outline-none placeholder:text-center lg:placeholder:text-start placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
            ></input>

            <input
              placeholder="Email"
              className=" w-full py-3 outline-none placeholder:text-center lg:placeholder:text-start placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
            ></input>

            <textarea
              placeholder="Message"
              className="px-10 py-3 outline-none lg:placeholder:text-start placeholder:text-center placeholder:text-[#525560] border-[1.5px] w-full border-[#E5E5E5]"
            ></textarea>

            <button className="bg-[#70C174] px-8 py-3 rounded-md text-white">
              Send message
            </button>
          </form>
          <UilTimes
            onClick={() => {
              setPopUp(false);
            }}
            className="top-7 right-10 z-40 absolute cursor-pointer"
          ></UilTimes>
        </section>
      )}
    </Fragment>
  );
}
