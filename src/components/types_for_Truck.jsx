import React from "react";
import Image from "next/image";

const types_for_Truck = () => {
  return (
    <div className="py-20">
      <h1 className="text-center text-3xl text-gray-400 mb-12">
        We service the following trailer types for Truck Dispatch:
      </h1>
      <div className="flex justify-between px-12 flex-wrap py-4">
        <div className="">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg"
          />
          <h1 className="text-center text-2xl text-gray-400">Dry Van</h1>
        </div>
        <div className="">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg"
          />
          <h1 className="text-center text-2xl text-gray-400">Dry Van</h1>
        </div>
        <div className="">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg"
          />
          <h1 className="text-center text-2xl text-gray-400">Dry Van</h1>
        </div>
        <div className="">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg"
          />
          <h1 className="text-center text-2xl text-gray-400">Dry Van</h1>
        </div>
        <div className="">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg"
          />
          <h1 className="text-center text-2xl text-gray-400">Dry Van</h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-center">
        <p className="text-center text-md text-text-color">
          At M&J Dispatch, LLC we specialize in giving trucking companies a
          competitive edge. We understand the need for specialized attention and
          are dedicated to helping owner/operators with up to 10 trucks maximize
          their profits by finding them the best-paying loads on offer. Our
          experienced dispatchers take care of all paperwork, phone calls and
          payments so that drivers can concentrate solely on getting from A to B
          – securely, safely and efficiently! Let us help you make your business
          dreams come true today! Contact us now for more information on our
          services. Thank you for considering M&J Dispatch, LLC! We look forward
          to hearing from you soon.
        </p>
      <button className="text-white rounded-[22px] mt-5 bg-green-700 duration-150 transition hover:bg-primary-dark font-medium text-lg  px-10 py-2.5 text-center">
        Submit
      </button>
      </div>
    </div>
  );
};

export default types_for_Truck;
