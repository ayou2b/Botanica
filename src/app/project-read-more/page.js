"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import read_more_image from "/./public/images/read_more_page/ignacio-brosa-vJDbPuxUS_s-unsplash.jpg";
import icon_1 from "/./public/images/read_more_page/Category.png";
import Icon_2 from "/./public/images/read_more_page//Discovery.png";
import Icon_3 from "/./public/images/read_more_page/Edit_Square.png";
import icon_4 from "/./public/images/read_more_page//Image.png";

import image_2 from "/./public/images/landing_page/annie-spratt-B5PcDNbMu0M-unsplash.jpg";
import image_3 from "/./public/images/landing_page/markus-winkler-vgR08PPx6Es-unsplash.jpg";
import image_4 from "/./public/images/landing_page/octav-cado-8Dgb-q_vB_E-unsplash.jpg";

import image_5 from "/./public/images/landing_page/v2osk-1Z2niiBPg5A-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { UilTimes } from "@iconscout/react-unicons";

function Page() {
  const [popUp, setPopUp] = useState(false);
  return (
    <Fragment>
      <Header></Header>

      <section className="mt-28 mb-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24   text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-7">
          <span className="flex items-center gap-6 font-semibold uppercase text-[#1D2130]">
            Our project{" "}
            <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
          </span>
          <h1 className="text-[30px] font-semibold text-[#1D2130]">
            Weekly cleanliness program in city
          </h1>
          <p className="leading-7 text-[#525560]">
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </p>
          <p className="leading-7 text-[#525560]">
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            <br />
            volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim
            a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
            arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
            duis praesent tempor feugiat ornare in. Erat libero egestas
            porttitor nunc pellentesque mauris et pulvinar eget.
          </p>
          <p className="leading-7 text-[#525560]">
            Consectetur feugiat quis hac enim nullam in enim. Tellus nisi
            dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi
            ultricies et consectetur vel non. Augue enim enim, eget ut sit
            purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus,
            vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis
            faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa
            ultricies faucibus pellentesque risus duis est.
          </p>
          <Image
            src={read_more_image}
            alt=""
            className="h-60 w-full object-cover rounded-md"
          ></Image>
          <h1 className="text-[30px] font-semibold text-[#1D2130]">
            Some cool heading
          </h1>
          <p className="leading-7 text-[#525560]">
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non
            semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum
            sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam
            sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi
            at eget sit et quisque. Semper commodo viverra donec magna egestas
            nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras
            eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi
            bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae
            odio. Mi eu lectus suscipit sagittis, ultrices ut dui.
          </p>
          <ul className="font-semibold flex flex-col gap-3 list-disc	ml-5">
            <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
            <li>In diam facilisi at sit convallis blandit blandit in.</li>
            <li>
              Maecenas odio orci lectus urna ante consequat erat non morbi.
            </li>
          </ul>
          <p className="leading-7 text-[#525560]">
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi.
          </p>
        </div>
      </section>

      <section className="mb-20 bg-[#EBF0F9] py-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 text-center lg:text-start flex items-center justify-center">
        <div className="flex 2xl:max-w-[1300px] w-full flex-col items-center gap-10 md:grid md:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:flex-row">
            <Image
              src={icon_1}
              alt=""
              className="w-[25px] object-cover"
            ></Image>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1D2130] font-semibold text-[20px]">
                200+ Plantation in 1 week
              </h2>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 lg:flex-row">
            <Image
              src={Icon_2}
              alt=""
              className="w-[25px] object-cover"
            ></Image>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1D2130] font-semibold text-[20px]">
                230 People Have donated
              </h2>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 lg:flex-row ">
            <Image
              src={Icon_3}
              alt=""
              className="w-[25px] object-cover"
            ></Image>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1D2130] font-semibold text-[20px]">
                30+ people joined
              </h2>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 lg:flex-row">
            <Image
              src={icon_4}
              alt=""
              className="w-[25px] object-cover"
            ></Image>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1D2130] font-semibold text-[20px]">
                $324 Raised for this initiate
              </h2>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
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

          <div className="flex flex-col w-full rounded-md transition-all items-center gap-10 lg:flex-row lg:justify-between">
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
                  href="#"
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
                  href="#"
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
                  href="#"
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

      <section className="text-center transition-all w-full mb-20 flex items-center justify-center  px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24">
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
