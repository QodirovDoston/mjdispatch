import React from "react";
import Image from "next/image";

const types_for_Truck = () => {

  const  catalog = [
    {img:"https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg", text:"Dry Van"},
    {img:"https://mjdispatch.com/wp-content/uploads/2022/11/step-deck-wite.jpg", text:"Flatbed"},
    {img:"https://mjdispatch.com/wp-content/uploads/2022/11/reefer-white-2.jpg", text:"Power Only"},
    {img:"https://mjdispatch.com/wp-content/uploads/2022/11/dry-van-white1.jpg", text:"Reefer"},
    {img:"https://mjdispatch.com/wp-content/uploads/2022/10/flatbed-white-300x109.jpg", text:"Step Deck"}
    ]

  return (
    <div className="xl:py-20 py-5">
      <h1 className="text-center text-3xl text-gray-400 mb-12 mt-10">
        We service the following trailer types for Truck Dispatch:
      </h1>
      <div className="flex 2x:justify-between justify-center xl:px-12 lg:px-5 px-2 flex-wrap py-4">
        {catalog.map((item, idx)=>{ 
        return(
        <div key={idx} className="cursor-pointer">
          <Image
            width={250}
            height={250}
            alt="hero img"
            src={item.img}
            />
          <h1 className="text-center text-2xl text-gray-400">{item.text}</h1>
        </div>
            )
          })}
     </div>
      <div className="xl:w-[80%] w-[90%] mx-auto text-center">
        <p className="text-center text-md text-text-color">
          At M&J Dispatch, LLC we specialize in giving trucking companies a
          competitive edge. We understand the need for specialized attention and
          are dedicated to helping owner/operators with up to 10 trucks maximize
          their profits by finding them the best-paying loads on offer. Our
          experienced dispatchers take care of all paperwork, phone calls and
          payments so that drivers can concentrate solely on getting from A to B
          – securely, safely and efficiently! Let us help you make your business
          dreams come true today! Contact us now for more information on our
          services. Thank you for considering <a href='#serves' className='text-green-700 cursor-pointer' >M&J Dispatch, LLC!</a> We look forward
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
