"use client";

import React from "react";
import QuoteIcon from "../../../public/images/svgs/quote.svg";
import CardIcon from "../../../public/images/svgs/card.svg";
import ScrollIcon from "../../../public/images/svgs/circle.svg";

export const HeroSection = () => {
  return (
    <div className="w-full h-[80vh] relative flex justify-between items-center">
      <div className="absolute top-0 left-[20%]">
        <div className="bg-blur-bg w-[800px] flex justify-center items-center h-[800px] bg-contain bg-no-repeat">
          <ScrollIcon />
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="font-bold leading-[45px] text-[43px] text-white">
          The software development agency that makes the difference
        </h1>
        <div className="flex w-[70%] mt-14 flex-wrap justify-start items-center gap-6">
          {[
            "User interface",
            "Web app design",
            "Web Development",
            "SEO RANKING",
            "Mobile / Web App Development",
          ].map((element) => (
            <div
              key={element}
              className="card px-6 font-regular py-[6px] w-fit"
            >
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-end flex-col">
        <div>
          <div className="self-start">
            <CardIcon />
            <QuoteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
