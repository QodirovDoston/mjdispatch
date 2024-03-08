"use client";
import React from "react";
import calendaCheck from "../assets/icons/calendaCheck.svg";
import Image from "next/image";

const DruckDispatch = () => {
  return (
    <div className="text-center">
      <h1 className="text-text-color text-3xl mt-10">TRUCK DISPATCH SERVICES</h1>
      <p className="text-text-color py-8 leading-10">
        At <span className="text-green-700"> M&J DISPATCH </span> we strive to
        provide the best customer service in the industry. We are willing to go
        above and beyond to help you meet your business goals. Give us a try, we
        promise you will be glad you did.
      </p>
      {/* <ButtonCom
        link="tel:+998933213940"
        text="SIGN UP TODAY!"
        // icon={calendaCheck}
        addStyle='bg-green-700'
      /> */}

      <a href="" className="flex justify-center">
        <button
          className={`text-white rounded-[22px] border-2 flex gap-2 bg-green-700 duration-150 transition hover:border-green-700 hover:text-green-700  font-medium text-lg  px-5 py-2.5 text-center`}
        >
          <Image
            className="hover:scale-110 duration-500"
            width={30}
            height={30}
            alt="hero img"
            src={calendaCheck}
          />
          SIGN UP TODAY!
        </button>
      </a>
    </div>
  );
};

export default DruckDispatch;
