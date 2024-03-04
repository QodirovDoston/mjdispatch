"use client";
import React from "react";
import Image from "next/image";
import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";



const index = () => {
  const footerlink = [
    { name: "Dispatching", link: "#" },
    { name: "actor Invoicing", link: "#" },
    { name: "Broker Packets", link: "#" },
    { name: "Commercial Insurance", link: "#" },
    { name: "Dispatch Training", link: "#" },
    { name: "Consulting", link: "#" }
  ];
  return (
    <>
    <div className="footer">
      <div className="grid grid-cols-4 w-[80%] mx-auto py-6 gap-4">
        <div>
          <Image
            width={350}
            height={350}
            alt="hero img"
            src="https://mjdispatch.com/wp-content/uploads/2023/03/MJ-Logo-2x-400x1241-1.png"
          />
          <p className="text-white ">
            M&J Dispatch Consulting and Training is here for all your dispatch
            needs. We are here to help grow your business!
          </p>
        </div>
        <div className="mt-6">
          <ul className="text-green-800">
            {footerlink.map((item, idx) => {
              return (
                <li key={idx} className="flex gap-2 item-center">
                  <div className="bg-blue-800 w-2 h-2 mt-2 rounded-full" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12199.99001236602!2d67.8212104!3d40.14233935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1709541914504!5m2!1sru!2s"
            width="250"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className='mt-4'>
          <ul className="text-white">
            <li className="flex gap-2 item-center cursor-pointer">
              <Image width={25} height={25} alt="hero img" src={locationIcon} />
              Brazil, IN 47834
            </li>
            <li className="flex gap-2 item-center my-2 cursor-pointer">
              <Image width={25} height={25} alt="hero img" src={phoneIcon} />
              1.888.8.DISPATCH
            </li>
            <li className="flex gap-2 item-center cursor-pointer">
              <Image width={25} height={25} alt="hero img" src={emailIcon} />
              matt@mjdispatch.com
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-text-color py-4">
      <div className='w-[80%] mx-auto'>
        <p className="text-white text-md">© Copyright 2022 - All Rights Reserved</p>
    </div>

    <a href="#top"   
            className="scroll-to-top fixed bottom-2 right-6 
                       bg-gray-800 text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200">
        <Image width={25} height={25} alt="hero" src="https://media.geeksforgeeks.org/wp-content/uploads/20240227155250/up.png"
className="w-12 h-12 rounded-full bg-white" />
  </a>
    </div>
    </>
  );

};

export default index;
