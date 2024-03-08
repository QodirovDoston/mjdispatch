import Image from "next/image";
import React from "react";
import deal from "../assets/for_card_icons/deal.svg";


const data = [
    {
      img: deal,
      title: "Personal Dispatcher",
      parag:
        "You will be assigned an experienced and dedicated dispatcher who is available 24/7 to meet all your dispatching needs."
    },
    {
      img: deal,
      title: "Book your load",
      parag:
        "Your dispatcher will locate freight and book loads for you based on your preferences. Do you want to be home on the weekends? No problem! Do you want to stay in the midwest? Absolutely! You are in the driver’s seat."
    },
    {
      img: deal,
      title: "Negotiate the best rates",
      parag:
        "You will be assigned an experienced and dedicated dispatcher who is available 24/7 to meet all your dispatching needs."
    },
    {
      img: deal,
      title: "Run Credit Checks",
      parag:
        "We partner with your factoring company to run a credit check for each load you take to ensure you get paid."
    },
    {
      img: deal,
      title: "Back Office Support",
      parag:
        "Your personalized dispatcher will complete all Rate Confirmations, Broker Packet, and Carrier Set-Up packet."
    },
    {
      img: deal,
      title: "Communication",
      parag:
        "Your M&J Dispatcher will communicate all required information between the driver and the broker, including check calls and all clarifications."
    },
    {
      img: deal,
      title: "Email",
      parag:
        "Your dispatcher will email all Rate Cons, pick up and delivery information between the driver and broker."
    },
    {
      img: deal,
      title: "Invoicing",
      parag:
        "We offer factor invoicing for an additional weekly fee, this will allow NO HASSLE payment within 1-2 business days."
    },
    {
      img: deal,
      title: "Networking",
      parag:
        "Your dispatcher is very well connected within the industry. Need Factoring? Need a fuel card? Need insurance? Need Compliance? We got you covered!"
    }
  ];
const ForWeDoCard = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
    {data.map((item, idx)=>{
    return(     
        <div key={idx} className="w-full">
          <Image
            className="mx-auto rounded-full my-4 hover:scale-110 duration-500 bg-text-color p-3"
            width={100}
            height={100}
            alt="hero img"
            src={item.img}
          />
          <h1 className="text-2xl">
            {item.title}
          </h1>
          <p className="text-sm mt-4 leading-7 text-gray-800">
            {item.parag}
          </p>
        </div>
        )
    })}
    </div>
  );
};

export default ForWeDoCard;
