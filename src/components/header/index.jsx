'use client'
import Image from 'next/image';
import React, {useState} from 'react'
import arrow_bottom from '../../assets/icons/arrow-bottom.svg'
import Link from "next/link";
import { useParams } from 'next/navigation';
const index = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const {id } = useParams()
  const links = [
    {name: "HOME", link: "/"},
    {
      name: "ABOUT US", link: "/", dropDownData: [
        {text: "PARTNERS", value: "/partners"},
        {text: "TESTIMONIALS", value: "/testimonials"}
      ]
    },
    {
      name: "SERVICES", link: "/", dropDownData: [
        {text: "DISPATCH SERVICES", value: "/dispatch-services"},
        {text: "TRUCKS SERVICED", value: "/equipment-dispatch"},
        {text: "BUSINESS CONSULTING", value: "/trucking-consulting"},
        {text: "DISPATCH TRAINING", value: "/truck-dispatch-training"},
        {text: "BROKER PACKETS", value: "/broker-contact-form"},
        {text: "FACTORING", value: "/factoring-company"},
        {text: "INSURANCE", value: "/commercial-cruck-cnsurance-company"},

      ]
    },
    {name: "TRAILER LEASES", link: "/trailer-leases"},
    {name: "FAQ", link: "/faq"},
    {name: "BLOG", link: "/blog"},
    {name: "CONTACT", link: "/contact-us"}
  ];
  return (
    <div id="top" className="bg-gray-100 ">
      <div className="xl:w-[85%] w-[95%] mx-auto py-6">
        <div className="flex flex-wrap">
          <a className="" href="#">
            <Image
            className='xl:w-[250px] w-[250px]'
              width={100%}
              height={100%}
              alt='hero img'
              src="https://mjdispatch.com/wp-content/uploads/2023/03/MJ-Logo-2x-400x1241-1.png"
            />
          </a>
          <div>
            <div className="md:flex hidden justify-between flex-wrap xl:gap-28 gap-8">
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
              <div className="xl:block flex">
                <div className="mb-1 bg-primary py-2 px-6 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a className="" href="tel:18888347728">
                    New Carrier Form
                  </a>
                </div>
                <div
                  className="mb-1 bg-primary py-2 px-4 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
                  <a href="tel:18888347728">Click to call</a>
                </div>
              </div>
            </div>
            <hr class="h-[1px] my-1 bg-primary border-0"/>
          </div>
        </div>
        <ul className="flex xl:justify-end justify-center flex-wrap xl:gap-20 gap-8 pt-4">
          {links.map((item,idx) => (
            <li className='flex item-center' key={idx} onMouseEnter={() => setActiveIndex(idx)} onMouseLeave={() => setActiveIndex(null)}>
              <Link
              
                className={`text-text-color hover:text-primary font-bold ${item.link === `/${id}` ? 'active text-green-700' : ''}`}
                // className={`text-text-color hover:text-primary font-bold ${item.value === id ? 'active text-green-700' : ''}`}

                href={item.link}
              >
                {item.name}
              </Link>
              {activeIndex === idx && item.dropDownData && (
                <div className="absolute bg-white shadow-md mt-6" onMouseEnter={() => setActiveIndex(idx)} onMouseLeave={() => setActiveIndex(null)}>
                  {item.dropDownData.map((dropItem, dropIdx) => (
                    <div>
                      <Link key={dropIdx} href={dropItem.value}
                            className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100">
                        {dropItem.text}
                      </Link>
                      <hr/>
                    </div>
                  ))}
                </div>
              )}
               {(item.name === "ABOUT US" || item.name === "SERVICES") && (<Image src={arrow_bottom} alt="arrow" width={20} height={20}/>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default index
