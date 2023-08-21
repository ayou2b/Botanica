import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image_1 from "/./public/images/media/freddy-kearney-o-ioeoATbIM-unsplash.jpg";
import hero_image_2 from "/./public/images/media/milli-2l0CWTpcChI-unsplash.jpg";
import hero_image_3 from "/./public/images/media/sandie-clarke-q13Zq1Jufks-unsplash.jpg";

import image_6 from "/./public/images/landing_page/jed-owen-1JgUGDdcWnM-unsplash.jpg";
import image_7 from "/./public/images/landing_page/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg";
import image_8 from "/./public/images/landing_page/noah-buscher-x8ZStukS2PM-unsplash.jpg";
import image_9 from "/./public/images/landing_page/boxed-water-is-better-rkH3k-_rwvw-unsplash.jpg";

import arrow from "/./public/images/landing_page/Arrow.png";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="lg:h-[90vh] bg-[#EFF7F2] w-full text-center gap-10 py-16 lg:text-start flex flex-col lg:flex-row lg:justify-between items-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 mb-20">
        <div className="flex flex-col items-center lg:items-start max-w-lg transition-all gap-6">
          <span className="flex items-center gap-6 uppercase font-semibold text-[#1D2130]">
            Top news{" "}
            <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
          </span>
          <h1 className="text-[25px] font-bold text-[#1D2130]">
            Our goal is to make
            <br /> water available for
            <br /> everyone
          </h1>
          <p className="leading-7 text-[#525560]">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <Link
            href="/blog-post"
            className="px-8 py-3 rounded-md bg-[#70C174] text-white hover:scale-95 shadow-3xl duration-200"
          >
            Read more
          </Link>
        </div>

        <div className="bg-white p-5 rounded-md max-w-lg flex flex-col items-center gap-6">
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Image
              src={hero_image_1}
              alt=""
              className="w-28 h-28 object-cover rounded-md"
            ></Image>

            <div className="flex flex-col gap-2">
              <h3 className="text-[17px] font-semibold text-[#1D2130]">
                Don’t destroy greenery and don’t spoil scenery.
              </h3>
              <p className="leading-7 text-[14px] text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Image
              src={hero_image_2}
              alt=""
              className="w-28 h-28 object-cover rounded-md"
            ></Image>

            <div className="flex flex-col gap-2">
              <h3 className="text-[17px] font-semibold text-[#1D2130]">
                Why saving wildlife is extremely important
              </h3>
              <p className="leading-7 text-[14px] text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Image
              src={hero_image_3}
              alt=""
              className="w-28 h-28 object-cover rounded-md"
            ></Image>

            <div className="flex flex-col gap-2">
              <h3 className="text-[17px] font-semibold text-[#1D2130]">
                Caring for the present is caring for the future
              </h3>
              <p className="leading-7 text-[14px] text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 text-center px-12 sm:px-14 md:px-16 lg:text-start lg:items-start lg:px-20 xl:px-24 flex flex-col items-center gap-10">
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
          <Link href="/blog-post" className="flex flex-col items-center gap-4">
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

          <Link href="/blog-post" className="flex flex-col items-center gap-4">
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

          <Link href="/blog-post" className="flex flex-col items-center gap-4">
            <Image
              src={image_8}
              alt=""
              className="w-full h-48 object-cover rounded-md"
            ></Image>
            <div className="flex flex-col gap-2">
              <h4 className="text-[18px] font-semibold">
                Top 10 facts about wind farms you didn't know
              </h4>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center gap-4">
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
      </section>

      <section className="text-center lg:text-start mb-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center lg:items-start gap-10">
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
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
