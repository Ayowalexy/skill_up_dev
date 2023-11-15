"use client";

import { gilroy, athens } from "../../../public/fonts";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const DesktopHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [drt, setDrt] = useState<boolean>(true);
  const counter = useRef(1);

  useEffect(() => {
    const doc = document.querySelectorAll(".boxer");
    // if (!drt) {
    //   for (let ele of Array.from(doc)) {
    //     ele.classList.add("open");
    //     // setDrt(true)
    //   }
    // }
  }, [openMenu, drt]);

  console.log(drt);

  return (
    <div className="">
      <div className="w-full top-0 pt-10 flex justify-between items-center">
        <div className={`font-black text-lg`}>i-CYRUS</div>
        <div className="relative">
          <div
            className="absolute z-30 right-[5px]"
            onClick={() => {
              if (openMenu) {
                setDrt(false);
              } else {
                setDrt(true);
              }

              setTimeout(() => {
                setOpenMenu((prev) => !prev);
              }, 200);
            }}
          >
            <motion.div
              animate={{
                rotate: openMenu ? "45deg" : "0deg",
              }}
              className="origin-left w-[45px] h-[2px] bg-white"
            />
            <motion.div
              animate={{
                rotate: openMenu ? "-45deg" : "0deg",
                marginTop: openMenu ? "30px" : "10px",
              }}
              className="origin-left w-[45px] h-[2px] bg-white"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={
          {
            // scaleY: openMenu ? 1 : 0,
            // transition: {
            //   ease: [0.965, 0.09, 0.16, 0.835],
            //   duration: 0.8,
            // },
          }
        }
        className={`${
          openMenu ? "origin-bottom" : "origin-top"
        } absolute pl-[100px] pt-14 top-0 left-0 z-20 bg-[#252E39] w-full h-[100vh]`}
      >
        {[
          {
            header: "Showcase / E-commerce",
            title: "Website Design",
          },
          {
            header: "Visual Identity / Logos / Variations",
            title: "Brand Image",
          },
          {
            header: "Social netwrks / Retargeting / Newsletter",
            title: "Digital Marketing",
          },
          {
            header: "Proud of our customers",
            title: "Clients",
          },
          {
            header: "Let's start project together",
            title: "Write us",
          },
        ].map((element) => (
          <div
            key={element.header}
            className="flex flex-col justify-start items-start"
          >
            <p className="font-light text-sm mt-10 mb-4">{element.header}</p>
            <div className="border overflow-hidden">
              <motion.div
                initial={{ translateY: -100 }}
                animate={{
                  translateY: openMenu ? 0 : drt ? -100 : 100,
                  transition: {
                    ease: [0.965, 0.09, 0.16, 0.835],
                    duration: 0.8,
                    delay: openMenu ? 0.4 : 1,
                  },
                }}
                className={`${athens.className} boxer font-bold text-[40px]`}
              >
                {element.title}
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
