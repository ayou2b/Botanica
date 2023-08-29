"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/donation_page/pexels-julia-m-cameron-6994982.jpg";

import image_5 from "/./public/images/landing_page/v2osk-1Z2niiBPg5A-unsplash.jpg";

import { UilTimes } from "@iconscout/react-unicons";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Page() {
  const [Overview, setOverview] = useState(true);
  const [Impact, setImpact] = useState(false);
  const [WhatYouGet, setWhatYouGet] = useState(false);

  const [popUp, setPopUp] = useState(false);

  return (
    <Fragment>
      <Header></Header>

      <section className="mb-20 py-20 lg:h-[90vh] w-full px-12  lg:text-start  sm:px-14 md:px-16 lg:px-20 xl:px-24 bg-[#EFF7F2] text-center flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] gap-10 flex flex-col items-center lg:flex-row-reverse lg:justify-between">
          <Image
            src={hero_image}
            alt=""
            className="max-w-[500px] w-full object-cover rounded-md"
          ></Image>

          <div className="flex flex-col items-center lg:items-start max-w-lg transition-all gap-6">
            <span className="uppercase font-semibold text-[#1D2130] flex gap-6 items-center">
              Donate{" "}
              <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
            </span>
            <h1 className="text-[30px] font-semibold text-[#1D2130]">
              Making a donation for
              <br /> Nature.
            </h1>
            <p className="leading-7 text-[#525560]">
              When you donate, you’re supporting effective solutions to big
              environmental challenges—an investment in the future of our
              planet.
            </p>
            <Link
              href="#"
              className="px-8 py-3 bg-[#70C174] text-white shadow-3xl rounded-md hover:scale-95 duration-200"
            >
              Donate now
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12 px-12  sm:px-14 md:px-16 py-16 flex items-center justify-center  lg:px-20 xl:px-24 text-center lg:text-start ">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="flex mb-16 flex-col items-center  lg:justify-between lg:flex-row lg:items-start gap-10">
            <div className="max-w-lg">
              <h2 className="text-[25px] font-semibold text-[#1D2130]">
                How you can contribute to protect Earth
              </h2>
              <p className="leading-7 text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:max-w-lg lg:items-start max-w-lg">
              <div className="flex flex-col lg:flex-row items-center transition-all gap-4 lg:gap-0">
                <button
                  onClick={() => {
                    setOverview(true);
                    setImpact(false);
                    setWhatYouGet(false);
                  }}
                  className={`${
                    Overview === true
                      ? "border-[#70C174] text-[#70C174]"
                      : "border-[#525560]  text-[#525560]"
                  } px-8 pb-3 border-b-[2px] font-semibold whitespace-nowrap hover:border-[#70C174] hover:text-[#70C174] duration-100`}
                >
                  Overview
                </button>

                <button
                  onClick={() => {
                    setOverview(false);
                    setImpact(true);
                    setWhatYouGet(false);
                  }}
                  className={`${
                    Impact === true
                      ? "border-[#70C174] text-[#70C174]"
                      : "border-[#525560] text-[#525560]"
                  } px-8 pb-3 border-b-[2px] font-semibold whitespace-nowrap hover:border-[#70C174] hover:text-[#70C174] duration-100`}
                >
                  Impact
                </button>

                <button
                  onClick={() => {
                    setOverview(false);
                    setImpact(false);
                    setWhatYouGet(true);
                  }}
                  className={`${
                    WhatYouGet === true
                      ? "border-[#70C174] text-[#70C174]"
                      : "border-[#525560]  text-[#525560]"
                  } px-8 pb-3 border-b-[2px] font-semibold whitespace-nowrap hover:border-[#70C174] hover:text-[#70C174] duration-100`}
                >
                  What You get
                </button>
              </div>

              <div>
                {Overview === true && (
                  <div className="flex flex-col gap-4">
                    <p className="leading-7 text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.{" "}
                    </p>
                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </div>
                )}

                {Impact === true && (
                  <div className="flex flex-col gap-4">
                    <p className="leading-7 text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.{" "}
                    </p>
                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </div>
                )}

                {WhatYouGet === true && (
                  <div className="flex flex-col gap-4">
                    <p className="leading-7 text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.{" "}
                    </p>
                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>

                    <p className="leading-7 text-[#525560]">
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-[2px] bg-[#E5E5E5]"></div>
        </div>
      </section>

      <section className=" text-center lg:text-start  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex items-center flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="text-[25px] font-semibold text-[#1D2130] max-w-sm">
            How we use your donation
          </h2>
          <p className="leading-7 text-[#525560] max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className="leading-7 text-[#525560] max-w-sm">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet.
          </p>
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
          <div className="z-30 absolute flex items-center flex-col gap-10">
            <h2 className="text-[25px] font-semibold">
              You can contribute to make
              <br /> the environment greener!
            </h2>
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <button
                onClick={() => {
                  setPopUp(true);
                }}
                className="px-8 py-3 bg-[#70C174] hover:scale-95 duration-200 text-white rounded-md font-semibold"
              >
                Join as a volunteer
              </button>
              <button className="px-8 py-3 hover:scale-95 duration-200 bg-white text-black rounded-md font-semibold">
                Donate
              </button>
            </div>
          </div>
          <div className="top-0 left-0 w-full h-full bg-[rgb(0,0,0,60%)] z-0 rounded-md"></div>
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
