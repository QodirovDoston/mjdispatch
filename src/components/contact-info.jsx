import React from "react";

const ContactInfo = () => {
  return (
    <div className="item2 xl:row-span-2 col-span-1 xl:text-start text-center row-span-2 mt-5">
      <p className="text-2xl font-bold">Contact Info</p>
      <p className="text-sm text-text-color py-4">
        17 N. Vandalia St. Brazil, In 47834
      </p>
      <p className="text-sm  text-text-color ">
        Phone:{" "}
        <span className="text-sm text-green-700 py-4"> 1.888.8.DISPATCH </span>
      </p>
      <p className="text-sm  text-text-color ">
        Email:<span className="text-sm text-green-700 py-4">
          {" "}matt@mjdispatch.com
        </span>
      </p>
      <p className="text-xl font-bold py-4">Location</p>
      <iframe
      style={{width:'100%', height:'100%' ,maxHeight:'250px'}}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48291.81759739298!2d-88.146704!3d40.844685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886d115acdefffff%3A0x87cb71d823870ae6!2sM%26J%20Dispatch%20LLC!5e0!3m2!1sen!2sus!4v1709822300765!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <p className="text-xl font-bold py-4">Testimonials</p>
      <p className="text-2xl font-bold text-gray-400">
        Great People Great Company
      </p>

      <p className="text-sm text-text-color py-4">
        I’ve been using their services for 5 months and its one of the best
        companies I’ve worked with by far. Matt and his team are always
        available to help and always find a way to get you out of any situation
        you might run across.
      </p>
      <p className="text-sm text-text-color py-4 font-bold"> Ken</p>
      <p className="text-sm text-text-color py-4">
        Timeless Solutions LLC | December 3, 2019
      </p>
    </div>
  );
};

export default ContactInfo;
