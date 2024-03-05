import React from "react";
import phoneIcon from "../assets/icons/phone.svg";
import Image from "next/image";
import Card from './card';

const callUsToday = () => {
  return (
    <div>
      <div className="callus">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between py-8">
            <div>
              <h1 className="text-white text-3xl font-bold">Call Us Today!</h1>
              <h5 className="text-white text-2xl font-bold">Nationwide Dispatching Services Available</h5>
            </div>
            <a className="text-3xl font-bold cursor-pointer flex gap-3 items-center" href="tel:+998500033940">
              <Image width={45} height={45} alt="hero img" src={phoneIcon} />
              <span className='text text-gray-300'>
              1.888.8.DISPATCH
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="call">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between">
          <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default callUsToday;
