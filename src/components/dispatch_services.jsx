import React from "react";
import { accardion } from '../utils/index';

const DispatchServices = () => {
  return (
    <div className="bg-gray-100 pb-8 pt-16 path">
    <div className="xl:w-[80%] w-[95%] mx-auto">
      <h1 className="text-gray-600 text-3xl text-center font-bold mt-12">
        We save you time and make you money with our Truck Dispatch Services m&j
        content.
      </h1>
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <div>
        <p className="text-text-color">
          We are the best in the industry at negotiating the highest paying
          rates and finding the best loads to meet your needs. Let our dedicated
          and experienced dispatchers save you time and make you money so all
          you have to do is DRIVE!
        </p>
        <iframe
            style={{width:'100%', height:'100%' ,maxHeight:'350px', marginTop:'30px'}}
            src="https://www.youtube.com/embed/TT6hyiDgzZQ?si=Wuz0wGg6yd5JUJPt&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            />
            </div>
        <div className="">
          <div className="max-w-screen-xl mx-auto xl:px-5 px-1 min-h-sceen xl:mt-1 md:mt-32 mt-56">
            <div className="grid max-w-xl mx-auto mt-1">
              {accardion.map((item, index)=>{
              return(
              <div key={index} className="py-[3px]">
                <details className="group border-2 bg-white border-gray-200 px-8 py-4 gap-4">
                  <summary className="flex gap-5 items-center font-medium cursor-pointer list-none">
                    <span className="transition group-open:rotate-180">
                      <svg
                        className='group-hover:text-green-700'
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                    <span className="text-green-700 font-extrabold"> {item.title}</span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn duration-700 transition-all">
                  {item.paragrow}
                  </p>
                </details>
              </div>
               )
              })}
            </div>
          </div>
        </div>
     
      </div>
    </div>
    </div>
  );
};

export default DispatchServices;
