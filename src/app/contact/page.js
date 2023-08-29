import React, { Fragment } from "react";
import { UilFacebook, UilLinkedin, UilTwitter } from "@iconscout/react-unicons";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Contact",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="lg:h-[90vh] bg-[#EBF0F9] text-center py-20 lg:text-start px-12 mb-20 flex justify-center items-center w-full  sm:px-14 md:px-16 lg:px-20 xl:px-24">
        <div className="flex flex-col 2xl:max-w-[1300px] items-center lg:flex-row lg:justify-between lg:gap-32 w-full lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-4 max-w-lg">
            <span className="flex  items-center gap-6 uppercase font-semibold text-[#1D2130]">
              Contact us{" "}
              <div className="w-14 h-[2px] bg-[#1D2130] hidden lg:block"></div>
            </span>
            <h1 className="text-[#1D2130] font-semibold text-[30px]">
              We d love to hear from you
            </h1>
            <p className="leading-7 text-[#525560]">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-7 max-w-lg">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-[#1D2130] text-[18px] font-bold">
                Let s talk!
              </span>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                <p className="text-[#1D2130]">+1 23 456 789</p>
                <p className="text-[#1D2130]">hello@finsweet.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-[#1D2130] text-[18px] font-bold">
                Head office
              </span>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                <p className="text-[#1D2130]">
                  8 Brewery Drive, Hudson, NH 03051
                  <br /> USA
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-[#1D2130] text-[18px] font-bold">
                Branch Office
              </span>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                <p className="text-[#1D2130]">
                  178 Marconi St., Venice, 34293
                  <br /> Italy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <UilFacebook className="hover:text-[#70C174] duration-200 cursor-pointer"></UilFacebook>
              <UilTwitter className="hover:text-[#70C174] duration-200 cursor-pointer"></UilTwitter>
              <UilLinkedin className="hover:text-[#70C174] duration-200 cursor-pointer"></UilLinkedin>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 md:px-16 lg:px-20 flex mb-20 items-start justify-center w-full xl:px-24">
        <form className="flex flex-col items-center  gap-3 ">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-col lg:flex-row gap-3">
              <input
                placeholder="First Name"
                className="px-10 py-3 outline-none placeholder:text-center lg:placeholder:text-start placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
              ></input>
              <input
                placeholder="Last Name"
                className="px-10 py-3 outline-none placeholder:text-center lg:placeholder:text-start placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
              ></input>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <input
                placeholder="Email"
                className="px-10 py-3 outline-none lg:placeholder:text-start placeholder:text-center placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
              ></input>
              <input
                placeholder="Subject"
                className="px-10 py-3 outline-none lg:placeholder:text-start placeholder:text-center placeholder:text-[#525560] border-b-[1.5px] border-[#E5E5E5]"
              ></input>
            </div>
            <textarea
              placeholder="Message"
              className="px-10 py-3 outline-none lg:placeholder:text-start placeholder:text-center placeholder:text-[#525560] border-[1.5px] w-full border-[#E5E5E5]"
            ></textarea>
          </div>
          <button className="bg-[#70C174] px-8 py-3 rounded-md text-white">
            Send message
          </button>
        </form>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
