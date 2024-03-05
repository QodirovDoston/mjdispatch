import React from "react";
import phoneIcon from "../assets/icons/phone.svg";
import Image from "next/image";
import Card from "./card";

const callUsToday = () => {
  const cards =[
  {img: "https://mjdispatch.com/wp-content/uploads/2022/02/cropped-Semi5.jpg", title:"Dispatching", link:"#"},
  {img: "https://mjdispatch.com/wp-content/uploads/2022/02/cropped-Semi5.jpg", title:"Dispatching" ,link:"#"},
  {img: "https://mjdispatch.com/wp-content/uploads/2022/02/cropped-Semi5.jpg", title:"Dispatching", link:"#"}

  ]
  return (
    <div>
      <div className="callus">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between flex-wrap py-8">
            <div>
              <h1 className="text-white text-3xl font-bold">Call Us Today!</h1>
              <h5 className="text-white text-2xl font-bold">
                Nationwide Dispatching Services Available
              </h5>
            </div>
            <a
              className="xl:text-3xl text-xl font-bold cursor-pointer flex gap-3 items-center"
              href="tel:+998500033940"
            >
              <Image width={45} height={45} alt="hero img" src={phoneIcon} />
              <span className="text text-gray-300">1.888.8.DISPATCH</span>
            </a>
          </div>
        </div>
      </div>
      <div className="call">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-2">
            <Card />
            <div className='grid grid-cols-3 items-center'>
              {cards.map((item, index)=>{
              return(
                <div>
                <Image
                className="hover:scale-125 duration-500"
                  width={500}
                  height={500}
                  alt="hero img"
                  src={item.img}
                />
                <p className='text-white text-xl py-4'>{item.title}</p>
                <button className="text-white rounded-[22px] border-2 border-white duration-150 transition hover:border-green-700 hover:text-green-700  font-medium text-lg  px-5 py-2.5 text-center">
                Learn More
                </button>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default callUsToday;
