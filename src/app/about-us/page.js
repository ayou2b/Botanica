"use client";
import React, { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import logo_1 from "/./public/images/logos/Logo.png";
import logo_2 from "/./public/images/logos/Logo_1.png";
import logo_3 from "/./public/images/logos/Logo_2.png";
import logo_4 from "/./public/images/logos/Logo_3.png";
import logo_5 from "/./public/images/logos/Logo_4.png";
import logo_6 from "/./public/images/logos/Logo_5.png";

import image_1 from "/./public/images/about_page/zachary-nelson-98Elr-LIvD8-unsplash.jpg";

import award_1 from "/./public/images/about_page/Award_badge.png";
import award_2 from "/./public/images/about_page/Award_badge_1.png";
import award_3 from "/./public/images/about_page/Award_badge_2.png";
import award_4 from "/./public/images/about_page/Award_badge_3.png";

import image_2 from "/./public/images/about_page/toa-heftiba-x9I-6yoXrXE-unsplash.jpg";

import profile_1 from "/./public/images/profile_images/ben-den-engelsen-zNWlX5Sw9a4-unsplash.jpg";
import profile_2 from "/./public/images/profile_images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import profile_3 from "/./public/images/profile_images/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_4 from "/./public/images/profile_images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";
import profile_5 from "/./public/images/profile_images/luis-villasmil-Z4rqvRpRj38-unsplash.jpg";
import profile_6 from "/./public/images/profile_images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import profile_7 from "/./public/images/profile_images/podpros-GEnCnYhA1J4-unsplash.jpg";
import profile_8 from "/./public/images/profile_images/zoe-fernandez--zqoE7jnQgw-unsplash.jpg";

import image_5 from "/./public/images/landing_page/v2osk-1Z2niiBPg5A-unsplash.jpg";

import image_6 from "/./public/images/landing_page/jed-owen-1JgUGDdcWnM-unsplash.jpg";
import image_7 from "/./public/images/landing_page/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";
import image_8 from "/./public/images/landing_page/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import image_9 from "/./public/images/landing_page/boxed-water-is-better-rkH3k-_rwvw-unsplash.jpg";

import arrow from "/./public/images/landing_page/Arrow.png";

import { UilFacebook, UilLinkedin, UilTwitter } from "@iconscout/react-unicons";

import Header from "../../../components/Header";

import Footer from "../../../components/Footer";

import { UilTimes } from "@iconscout/react-unicons";

function Page() {
  const [popUp, setPopUp] = useState(false);

  return (
    <Fragment>
      <Header></Header>

      <section className="mt-16 mb-20 text-center lg:text-start  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] lg:items-start flex flex-col items-center gap-3">
          <span className="flex items-center font-semibold gap-6 text-[#1D2130] uppercase">
            Know about us
            <div className="w-14 h-[2px] hidden lg:block bg-[#1D2130]"></div>
          </span>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between w-full">
            <h1 className="text-[35px] font-semibold text-[#1D2130]">
              We are a nonprofit team
              <br /> working worldwide
            </h1>
            <div className="flex flex-col items-center gap-2 max-w-lg">
              <h3 className="text-[25px] font-semibold text-[#1D2130]">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </h3>
              <p className="text-[#3f4558] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim
                elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7F2] w-full relative pb-20 pt-48 mt-52 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 text-center flex items-center justify-center lg:text-start">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center">
          <Image
            src={image_1}
            alt=""
            className="h-80 w-[85%] 2xl:max-w-[1300px] object-cover absolute top-[-150px] rounded-md"
          ></Image>

          <div className="flex w-full flex-col mt-14 gap-10 lg:flex-row lg:items-start lg:justify-between mb-16">
            <div className="max-w-lg flex flex-col gap-3">
              <span className="font-semibold uppercase text-[#1D2130]">
                our mission
              </span>
              <h2 className="text-[25px] font-semibold text-[#1D2130]">
                We make the world we save our own environment
              </h2>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>

            <div className="max-w-lg flex flex-col gap-3">
              <span className="font-semibold uppercase text-[#1D2130]">
                our Vision
              </span>
              <h2 className="text-[25px] font-semibold text-[#1D2130]">
                Plant more trees to make world air pollution free
              </h2>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>

          <div className=" flex w-full flex-col items-center lg:items-start gap-6">
            <div className="flex items-center lg:w-full gap-6">
              <span className="text-[#1D2130] font-semibold whitespace-nowrap uppercase">
                our Supporters
              </span>
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
        </div>
      </section>

      <section className="mb-20 text-center flex items-center justify-center  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mt-20">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10">
          <h2 className="text-[30px] font-bold text-[#1D2130]">
            Awards & Recognitions
          </h2>
          <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row w-full lg:items-start lg:justify-between">
            <div className="flex items-center flex-col gap-4">
              <Image src={award_1} alt="" objectFit="cover"></Image>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[25px] text-[#1D2130] font-bold">2021</h3>
                <h4 className="text-[18px] font-semibold text-[#1D2130]">
                  Best NGO Award
                </h4>
                <p className="text-[#474c5f] uppercase">Berlin, Germany</p>
              </div>
            </div>

            <div className="flex items-center flex-col gap-4">
              <Image src={award_2} alt="" objectFit="cover"></Image>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[25px] text-[#1D2130] font-bold">2018</h3>
                <h4 className="text-[18px] font-semibold text-[#1D2130]">
                  Global Award
                </h4>
                <p className="text-[#474c5f] uppercase">New York, USA</p>
              </div>
            </div>

            <div className="flex items-center flex-col gap-4">
              <Image src={award_3} alt="" objectFit="cover"></Image>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[25px] text-[#1D2130] font-bold">2014</h3>
                <h4 className="text-[18px] font-semibold text-[#1D2130]">
                  Foresto Award
                </h4>
                <p className="text-[#474c5f] uppercase">New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-center flex-col gap-4">
              <Image src={award_4} alt="" objectFit="cover"></Image>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[25px] text-[#1D2130] font-bold">2010</h3>
                <h4 className="text-[18px] font-semibold text-[#1D2130]">
                  Earth Saver Award
                </h4>
                <p className="text-[#474c5f] uppercase">Vienna, Austria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center lg:text-start flex items-center justify-center px-12 mb-20 sm:px-14 md:px-16 lg:px-20 xl:px-24">
        <div className="flex lg:pl-28 w-full 2xl:max-w-[1300px] bg-[#0B0706] px-12 lg:px-0 flex-col py-14 gap-10 rounded-md items-center lg:flex-row-reverse lg:gap-32">
          <Image
            src={image_2}
            alt=""
            className="md:max-w-[500px] object-cover rounded-l-md"
          ></Image>
          <div className="flex flex-col gap-5 max-w-lg">
            <span className="text-white font-semibold uppercase">
              OUR JOURNEY
            </span>
            <h2 className="text-[25px] font-semibold text-white">
              How we raised 34M
            </h2>
            <p className="text-[#c6c8ce] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh.
            </p>
            <div className="flex flex-col gap-10 items-center lg:flex-row lg:items-start">
              <div className="flex flex-col  gap-1">
                <h1 className="text-[25px] font-bold text-white">34M+</h1>
                <p className="text-[#c6c8ce] leading-7">Donation Received</p>
              </div>

              <div className="flex flex-col  gap-1">
                <h1 className="text-[25px] font-bold text-white">400+</h1>
                <p className="text-[#c6c8ce] leading-7">Volunters</p>
              </div>

              <div className="flex flex-col  gap-1">
                <h1 className="text-[25px] font-bold text-white">40K+</h1>
                <p className="text-[#c6c8ce] leading-7">Trees planted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className=" mb-20  text-center flex items-center justify-center"
      >
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10">
          <div className="flex flex-col gap-3 p-12 max-w-md">
            <h2 className="text-[25px] font-semibold text-[#1D2130]">
              Meet our team
            </h2>
            <p className="text-[#525560] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          <div className="flex flex-col lg:justify-between items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_7}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Leonard John Davies
                </p>
                <span className="text-[#525560] ">Cofounder, CEO</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_5}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Francis Weber
                </p>
                <span className="text-[#525560] ">Vice Chairman</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_8}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Kyla Obrien
                </p>
                <span className="text-[#525560] ">Head of Authority</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_4}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Adrian Dixon
                </p>
                <span className="text-[#525560] ">Support Executive</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_3}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Freddy Busby
                </p>
                <span className="text-[#525560] ">Project Manager</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_2}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Dale Banks
                </p>
                <span className="text-[#525560] ">Accountatnt, Finance</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_1}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Dale Banks
                </p>
                <span className="text-[#525560] ">Accountatnt, Finance</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src={profile_6}
                alt=""
                className="h-48 w-48 object-cover rounded-md"
              ></Image>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[18px] text-[#1D2130] font-semibold">
                  Miriam Middleton
                </p>
                <span className="text-[#525560] ">Cofounder, CEO</span>
                <div className="text-[#1D2130] flex items-center gap-4">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilLinkedin></UilLinkedin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center flex items-center justify-center transition-all w-full mb-20  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24">
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

      <section className="mb-20 text-center px-12 sm:px-14 md:px-16 lg:text-start  lg:px-20 xl:px-24 flex items-center justify-center ">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-10">
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
