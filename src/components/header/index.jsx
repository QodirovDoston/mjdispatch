"use client";
import Image from "next/image";
import React, { useState } from "react";
import arrow_bottom from "../../assets/icons/arrow-bottom.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const index = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = usePathname();
  const links = [
    { name: "HOME", link: "/" },
    {
      name: "ABOUT US",
      link: "/partners",
      dropDownData: [
        { text: "PARTNERS", value: "/partners" },
        { text: "TESTIMONIALS", value: "/testimonials" }
      ]
    },
    {
      name: "SERVICES",
      link: "/dispatch-services",
      dropDownData: [
        { text: "DISPATCH SERVICES", value: "/dispatch-services" },
        { text: "TRUCKS SERVICED", value: "/equipment-dispatch" },
        { text: "BUSINESS CONSULTING", value: "/trucking-consulting" },
        { text: "DISPATCH TRAINING", value: "/truck-dispatch-training" },
        { text: "BROKER PACKETS", value: "/broker-contact-form" },
        { text: "FACTORING", value: "/factoring-company" },
        { text: "INSURANCE", value: "/commercial-cruck-cnsurance-company" }
      ]
    },
    { name: "TRAILER LEASES", link: "/trailer-leases" },
    { name: "FAQ", link: "/faq" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact-us" }
  ];
  return (
    <div id="top" className="bg-gray-100 ">
      <div className="xl:w-[90%] w-[95%] mx-auto py-6">
        <div className="flex flex-wrap items-center justify-between">
          <a className="" href="/">
            <Image
              className="xl:w-[350px] w-[250px]"
              width={300}
              height={350}
              alt="hero img"
              src="https://mjdispatch.com/wp-content/uploads/2023/03/MJ-Logo-2x-400x1241-1.png"
            />
          </a>

          {/* Ma'lumotlar sahifasi */}
          <div className="md:block hidden">
            <div className="flex justify-between flex-wrap items-center xl:gap-28 md:gap-2 gap-0">
              {/* Telefon raqami */}
              <div className="">
                <div className="px-3">
                  <a className="text-text-color font-hairline text-lg" href="">
                    Have A Question?
                  </a>
                </div>
                <div className="mt-4 px-4">
                  <a className="text-green-700 font-hairline text-xl" href="">
                    (888) 834-7728
                  </a>
                </div>
              </div>
              {/* Ish vaqti */}
              <div className="">
                <div className="px-3">
                  <a className="text-text-color font-hairline text-lg" href="">
                    Our Hours
                  </a>
                </div>
                <div className="mt-4 px-4">
                  <a className="text-text-color font-hairline text-md" href="">
                    Office Hours{" "}
                    <span className="font-extrabold"> Mon – Fri 8am – 5pm</span>
                  </a>
                </div>
              </div>
              {/* Qo'llab-quvvat */}
              <div className="block">
                <div className="mb-1 bg-primary xl:py-2 py-1 px-6 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a className="" href="tel:18888347728">
                    New Carrier Form
                  </a>
                </div>
                <div className="mb-1 bg-primary xl:py-2 py-1 px-4 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a href="tel:18888347728">Click to call</a>
                </div>
              </div>
            </div>
            <hr class="h-[1px] my-1 bg-primary border-0" />
          </div>
          {/* Burger tugmasi */}
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={() => setToggle(!toggle)}
            type="button"
            className="items-center p-3 w-11 h-11 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Navigation menyusi */}
        <div className={toggle ? "block" : "hidden md:block"}>
          <ul className="md:flex block  md:justify-end justify-center flex-wrap xl:gap-20 gap-8 py-3">
            {links.map((item, idx) => {
                const isActive = router === item.link || (item.dropDownData &&
                  item.dropDownData.some((d) => d.value === router));
                  return(
                <li
                  className="flex item-center justify-center hover:bg-gray-200 md:hover:bg-gray-100 md:py-0 py-2 md:border-none border md:border-white border-gray-200"
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <Link
                    className={
                      isActive
                        ? "text-green-700 font-bold"
                        : "text-text-color font-bold"
                    }
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                  {activeIndex === idx && item.dropDownData && (

                    <div
                      className="absolute bg-white shadow-md mt-6"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {item.dropDownData.map((dropItem, dropIdx) => (
                        <div>
                          <Link
                            key={dropIdx}
                            href={dropItem.value}
                            className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropItem.text}
                          </Link>
                          <hr />
                        </div>
                      ))}
                    </div>
                  )}
                  {(item.name === "ABOUT US" || item.name === "SERVICES") && (
                    <Image
                      src={arrow_bottom}
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  )}
                </li>
              )
                  })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
