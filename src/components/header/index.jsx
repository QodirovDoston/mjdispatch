import Image from 'next/image';
import React from 'react'
import arrow_bottom from '../../mock'

const index = () => {
  const links = [
{ name: "HOME", link: "/" },
{ name: "ABOUT US", link: "/", dropDownData:[
  {text: "About drop-down", value:"firstDrop"},
  {text: "About drop-down", value:"firstDrop"},
  {text: "About drop-down", value:"firstDrop"},
  {text: "About drop-down", value:"firstDrop"},
  {text: "About drop-down", value:"firstDrop"},
] },
{ name: "SERVICES", link: "/" },
{ name: "TRAILER LEASES", link: "/" },
{ name: "FAQ", link: "/" },
{ name: "BLOG", link: "/" },
{ name: "CONTACT", link: "/" }
];
  return (
    <div id="" className="bg-gray-100 ">
      <div className="max-w-[80%] mx-auto py-6">
        <div class="flex">
          <a class="" href="#">
            <Image
              width={500}
              height={500}
              alt='hero img'
              src="https://mjdispatch.com/wp-content/uploads/2023/03/MJ-Logo-2x-400x1241-1.png"
            />
          </a>
          <div>
            <div className="flex justify-between gap-32">
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
                <div className="mb-1 bg-primary py-2 px-4 text-lg hover:bg-text-color duration-700 text-white rounded-2xl text-center">
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
          {links.map((item,idx) => {
            return (
              <li key={idx}>
                <a
                  className="text-text-color hover:text-primary font-bold"
                  href={item.link}
                >
                  {item.name}
                </a>
                <Image src={arrow_bottom} alt="arrow" width={40} height={40} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default index
