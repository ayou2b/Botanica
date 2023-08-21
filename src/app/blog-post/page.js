import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import blog_image from "/./public/images/blog-post/david-hepworth-EEQd7rE5hQA-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="mt-28 mb-20 px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 text-center lg:text-start flex gap-7 flex-col items-center lg:items-start">
        <span className="text-[#1D2130] font-semibold uppercase">
          21 DEC 2021
        </span>
        <h1 className="text-[#1D2130] text-[30px] font-semibold max-w-lg">
          Is climate change happening faster than expected?
        </h1>
        <p className="leading-7 text-[#525560] max-w-lg">
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit
          dignissim nibh sit.
        </p>
        <Image
          src={blog_image}
          alt=""
          className="h-60 w-full rounded-lg object-cover"
        ></Image>
        <h2 className="text-[#1D2130] text-[25px] font-semibold"></h2>
        <p className="leading-7 text-[#525560]">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <p className="leading-7 text-[#525560]">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          <br />
          volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a
          in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
          arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
          duis praesent tempor feugiat ornare in. Erat libero egestas porttitor
          nunc pellentesque mauris et pulvinar eget.
        </p>
        <p className="leading-7 text-[#525560]">
          Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus
          libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et
          consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl
          pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu
          rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel
          nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus
          pellentesque risus duis est.
        </p>

        <h3 className="text-[20px] font-semibold text-[#1D2130]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>

        <ul className="list-disc ml-6 flex flex-col gap-3">
          <li>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis.
          </li>
          <li>
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            volutpat dui. A bibendum viverra eu cras.
          </li>
          <li>Mauris morbi sed dignissim a in nec aliquam fringilla et. </li>
          <li>Consectetur feugiat quis hac enim nullam in enim.</li>
        </ul>

        <h3 className="text-[20px] font-semibold text-[#1D2130]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>

        <p className="leading-7 text-[#525560]">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <p className="leading-7 text-[#525560]">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras.
        </p>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
