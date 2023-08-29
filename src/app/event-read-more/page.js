import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import event_image from "/./public/images/event_read_more_page/lison-zhao-Lvt7BnCpUJE-unsplash.jpg";
import icon_1 from "/./public/images/event_read_more_page/Icon.png";
import icon_2 from "/./public/images/event_read_more_page/Icon_1.png";

import arrow from "/./public/images/landing_page/Arrow.png";

import Header from "../../../components/Header";

import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-12 sm:px-14 py-16 md:px-16 lg:px-20 xl:px-24 mb-20 bg-[#EFF7F2] text-center  lg:text-start flex justify-center items-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-10">
          <h1 className="text-[30px] font-bold text-[#1D2130]">
            Say no to using plastic and
            <br /> save Earth
          </h1>
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex items-center gap-4 flex-col lg:flex-row text-[#1D2130] font-medium">
              <Image src={icon_1} alt=""></Image> 8 Brewery Drive, Hudson, NH
              03051, USA
            </div>

            <div className="flex items-center gap-4 flex-col lg:flex-row text-[#1D2130] font-medium">
              <Image src={icon_2} alt=""></Image>
              September 3, 2021 8:30 AM
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 mb-20 md:px-16 lg:px-20 xl:px-24 text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-7">
          <h1 className="text-[#1D2130] text-[30px] font-semibold">About</h1>
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
          <Image
            src={event_image}
            alt=""
            className="h-60 w-full rounded-lg object-cover"
          ></Image>
          <p className="leading-7 text-[#525560]">
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </p>
        </div>
      </section>

      <section className="text-center lg:text-start mb-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-10">
          <div className="lg:w-full flex items-center gap-6">
            <h2 className="text-[25px] font-semibold whitespace-nowrap">
              Other Events
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
                href="#"
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
                href="#"
                className="bg-white w-[50px] h-[50px] rounded-full flex items-center hover:scale-95 duration-200 justify-center"
              >
                <Image src={arrow} alt="" objectFit="cover"></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
