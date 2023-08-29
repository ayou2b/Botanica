"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/what-we-do-page/pexels-thirdman-7656985.jpg";

import icon_1 from "/./public/images/what-we-do-page/Icon.png";
import icon_2 from "/./public/images/what-we-do-page/Icon_1.png";
import icon_3 from "/./public/images/what-we-do-page/Icon_2.png";
import icon_4 from "/./public/images/what-we-do-page/Icon_3.png";
import icon_5 from "/./public/images/what-we-do-page/Icon_4.png";
import icon_6 from "/./public/images/what-we-do-page/Icon_5.png";

import image_2 from "/./public/images/landing_page/annie-spratt-B5PcDNbMu0M-unsplash.jpg";
import image_3 from "/./public/images/landing_page/markus-winkler-vgR08PPx6Es-unsplash.jpg";
import image_4 from "/./public/images/landing_page/octav-cado-8Dgb-q_vB_E-unsplash.jpg";

import image_5 from "/./public/images/landing_page/v2osk-1Z2niiBPg5A-unsplash.jpg";

import image_6 from "/./public/images/landing_page/jed-owen-1JgUGDdcWnM-unsplash.jpg";
import image_7 from "/./public/images/landing_page/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";
import image_8 from "/./public/images/landing_page/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import image_9 from "/./public/images/landing_page/boxed-water-is-better-rkH3k-_rwvw-unsplash.jpg";

import arrow from "/./public/images/landing_page/Arrow.png";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { UilTimes } from "@iconscout/react-unicons";

function Page() {
  const [popUp, setPopUp] = useState(false);

  return (
    <Fragment>
      <Header></Header>

      <section className="h-[90vh] px-12 mb-20 sm:px-14 md:px-16 lg:px-20 xl:px-24 text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex gap-10  lg:flex-row-reverse lg:justify-between flex-col items-center justify-center">
          <Image
            src={hero_image}
            alt=""
            className="max-w-[400px] w-full max-h-[400px] object-cover rounded-md"
          ></Image>

          <div className="flex flex-col items-center lg:items-start gap-5 max-w-lg">
            <span className="flex items-center gap-6 text-[#1D2130] uppercase font-semibold">
              What we do
              <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
            </span>
            <h1 className="text-[#1D2130] text-[30px] font-bold">
              We are working world
              <br /> wide
            </h1>
            <p className="leading-7 text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7F2] px-12 w-full mb-20 py-20 sm:px-14 md:px-16 lg:px-20 xl:px-24  text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px]  flex flex-col items-center lg:items-start gap-10">
          <h2 className="text-[25px] font-semibold text-[#1D2130]">
            What we do for the environment
          </h2>
          <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:place-content-between w-full lg:grid-cols-3">
            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_1} width={70} alt="" objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Build healthy cities
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_2} alt="" width={70} objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Protect land and water
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_3} width={70} alt="" objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">Tree plantation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_4} width={70} alt="" objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">
                  Water sustainability
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_5} width={70} alt="" objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">Animal safety</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:flex-row">
              <Image src={icon_6} width={70} alt="" objectFit="cover"></Image>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold">Biodiversity</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20 flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="flex flex-col items-center mb-10  gap-4">
            <span className="text-[#1D2130] uppercase flex items-center gap-6 font-semibold">
              Projects we have done
            </span>
            <h2 className="text-[30px] text-[#1D2130] font-bold">
              We are Creating sustainable
              <br /> society, for everyone and
              <br /> forever.
            </h2>
          </div>

          <div className="flex flex-col rounded-md transition-all items-center gap-10 lg:flex-row lg:justify-between">
            <div
              className=" h-80 w-full relative flex shadow-4xl items-center rounded-md  justify-center"
              style={{
                backgroundImage: `url(${image_2.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="z-30 absolute flex items-center  max-w-md flex-col gap-3 p-7">
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
              <div className="z-30 absolute flex items-center  max-w-md flex-col gap-3 p-7">
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
              <div className="z-30 absolute flex items-center max-w-md flex-col gap-3 p-7">
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

      <section className="mb-20 text-center px-12 sm:px-14 md:px-16 lg:text-start lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:items-start ">
          <div className="w-full flex flex-col items-center lg:items-start gap-3 max-w-md">
            <h2 className="text-[25px] font-semibold whitespace-nowrap">
              Read our Recent News
            </h2>
            <p>
              Edit this text to make it your own. To edit, simply click directly
              on the text to start We are served
            </p>
          </div>

          <div className="flex w-full items-center flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start">
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

            <Link href="#" className="flex flex-col items-center gap-4">
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

      <Footer></Footer>

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

export default Page;
