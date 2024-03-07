"use client";
import React from "react";
import CarouselCom from "../../components/CaruselCompants/index";
import FormSendMesage from "../../components/FormSendMesage/index";
import AllDataSendForm from "../../components/AllDataSendForm/index";

const TestimonialsPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Testimonials
          </h1>
        </div>
      </div>
      <div className="xl:w-[80%] w-[95%] mx-auto py-28">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1">
            <h1 className="text-green-700 xl:text-5xl text-3xl font-bold text-center">
              Dispatch Testimonials
            </h1>
            <h1 className="text-text-color xl:text-5xl text-3xl font-medium my-5 text-center">
              Check out what our customers are saying about us!
            </h1>
            <CarouselCom />
          </div>
          <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
          </div>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
        <div className="item1 xl:col-span-2 col-span-2 row-span-1">
        <AllDataSendForm/>
        </div>
        <div className='item2 xl:row-span-2 col-span-1 row-span-2 mt5'>
          <p className='text-2xl font-bold'>Contact Info</p>
          <p className='text-2xl'>17 N. Vandalia St. Brazil, In 47834</p>
          <p className='text-2xl'>Phone: <span> 1.888.8.DISPATCH </span></p>
          <p className='text-2xl'>Email:<span> matt@mjdispatch.com</span></p>
          <p className='text-2xl'>Location</p>

        </div>
        </div>
      </div>
      <CarouselCom />
    </>
  );
};

export default TestimonialsPage;
