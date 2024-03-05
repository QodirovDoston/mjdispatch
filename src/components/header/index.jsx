'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import arrow_bottom from '../../assets/icons/arrow-bottom.svg'

const index = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const links = [
{ name: "HOME", link: "/" },
{ name: "ABOUT US", link: "/", dropDownData:[
  {text: "PARTNERS", value:"#"},
  {text: "TESTIMONIALS", value:"3"}
] },
{ name: "SERVICES", link: "/", dropDownData:[
  {text: "DISPATCH SERVICES", value:"#"},
  {text: "TRUCKS SERVICED", value:"#"},
  {text: "BUSINESS CONSULTING", value:"#"},
  {text: "DISPATCH TRAINING", value:"#"},
  {text: "BROKER PACKETS", value:"#"},
  {text: "FACTORING", value:"#"},
  {text: "INSURANCE", value:"#"},

] },
{ name: "TRAILER LEASES", link: "/" },
{ name: "FAQ", link: "/" },
{ name: "BLOG", link: "/" },
{ name: "CONTACT", link: "/" }
];
  return (
    <div id="top" className="bg-gray-100 ">
      <div className="max-w-[85%] mx-auto py-6">
        <div class="flex">
          <a class="" href="#">
            <Image
              width={350}
              height={350}
              alt='hero img'
              src="https://mjdispatch.com/wp-content/uploads/2023/03/MJ-Logo-2x-400x1241-1.png"
            />
          </a>
          
          <div>
            <div className="flex justify-between xl:gap-32 gap-12">
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
              <div className="">
                <div className="mb-1 bg-primary py-2 px-6 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a className="" href="tel:18888347728">
                    New Carrier Form
                  </a>
                </div>
                <div className="mb-1 bg-primary py-2 px-4 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a href="tel:18888347728">Click to call</a>
                </div>
              </div>
            </div>
            <hr class="h-[1px] my-1 bg-primary border-0" />
          </div>
        </div>
        <ul className="flex justify-end gap-20 pt-4">
          {links.map((item,idx) => (
            <li className='flex item-center' key={idx} onMouseEnter={() => setActiveIndex(idx)} onMouseLeave={() => setActiveIndex(null)}>
              <a
                className={`text-text-color hover:text-primary font-bold ${activeIndex === idx ? 'active' : ''}`}
                href={item.link}
              >
                {item.name}
              </a>
              {activeIndex === idx && item.dropDownData && (
                <div className="absolute bg-white shadow-md mt-6 w-max" onMouseEnter={() => setActiveIndex(idx)} onMouseLeave={() => setActiveIndex(null)}>
                  {item.dropDownData.map((dropItem, dropIdx) => (
                  <div>
                    <a key={dropIdx} className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100" href="#">
                      {dropItem.text}
                    </a>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
               {(item.name === "ABOUT US" || item.name === "SERVICES") && ( // Faqatgina "ABOUT US" yoki "SERVICES" maydonlari uchun arrow_bottom ni chiqarish shart qilinadi
                <Image src={arrow_bottom} alt="arrow" width={20} height={20} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default index