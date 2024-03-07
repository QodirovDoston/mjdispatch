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
      <div className="xl:w-[80%] w-[95%] mx-auto pt-28">
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
        <div className='item2 xl:row-span-2 col-span-1 row-span-2 mt-5'>
          <p className='text-xl font-bold'>Contact Info</p>
          <p className='text-sm text-text-color py-4'>17 N. Vandalia St. Brazil, In 47834</p>
          <p className='text-sm  text-text-color '>Phone: <span className='text-sm text-green-700 py-4'> 1.888.8.DISPATCH </span></p>
          <p className='text-sm  text-text-color '>Email:<span className='text-sm text-green-700 py-4'> matt@mjdispatch.com</span></p>
          <p className='text-xl font-bold py-4'>Location</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48291.81759739298!2d-88.146704!3d40.844685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886d115acdefffff%3A0x87cb71d823870ae6!2sM%26J%20Dispatch%20LLC!5e0!3m2!1sen!2sus!4v1709822300765!5m2!1sen!2sus" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p className='text-xl font-bold py-4'>Testimonials</p>
          <p className='text-2xl font-bold text-gray-400'>Great People Great Company</p>

          <p className='text-sm text-text-color py-4'>I’ve been using their services for 5 months and its one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.</p>
          <p className='text-sm text-text-color py-4 font-bold'> Ken</p>
          <p className='text-sm text-text-color py-4'>
Timeless Solutions LLC | December 3, 2019</p>

        </div>
        </div>
      </div>
      <div className='xl:w-[80%] w-[95%] mx-auto py-12'>
      <CarouselCom />
      </div>
    </>
  );
};

export default TestimonialsPage;
