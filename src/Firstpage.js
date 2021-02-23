/** @format */

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

const Firstpage = () => {
  return (
    <>
      <Splide
        className="images"
        options={{
          rewind: true,
          type: "loop",
          pagination: false,
          perPage: 1,
          perMove: 1,
          autoplay: false,
          gap: "1rem",
        }}>
        <SplideSlide>
          <FirstSlide />
        </SplideSlide>
        <SplideSlide>
          <SecondSlide />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Firstpage;
