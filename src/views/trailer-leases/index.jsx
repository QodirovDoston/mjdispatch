import Image from 'next/image'
import React from 'react'
import facebook from '../../assets/for_card_icons/facebook.svg'

const TrailerLeasesPage = () => {
  const data =["Trailer leasing needs vary depending on the nature of the business. In the transport and logistics industry, it is crucial to have reliable trailer leasing services that save both time and money. That’s where M&J Dispatch LLC comes in. As a premier transportation management company, we provide tailored solutions to meet your trailer leasing needs.","With years of experience in the industry, M&J Dispatch LLC serves as a valuable partner for many businesses. Trailer leasing refers to renting a trailer for a specified duration in exchange for payment. We offer various types and sizes of trailers, including flatbeds, dry vans, and refrigerated trailers. By leasing trailers from us, businesses can save on the costs of buying and maintaining trailers while enjoying flexible contract terms.","Our dispatch services are designed to ensure efficient, cost-effective, and timely transportation of goods. With state-of-the-art technology and a team of expert dispatchers, we handle route assignments, shipment tracking, and schedule management. Outsourcing these services to M&J Dispatch LLC allows businesses to streamline their operations and provide reliable services to clients.","Our customized trailer leasing and dispatch services are based on each client’s unique needs. We offer a wide range of modern trailers, including flatbeds, dry vans, and refrigerated trailers. By choosing M&J Dispatch LLC, businesses can benefit from enhanced reliability, 24/7 dispatch services, and access to state-of-the-art equipment.","Streamline your operations, minimize costs, and provide dependable services with M&J Dispatch LLC’s trailer leasing and dispatch services. Contact us today to discuss your specific requirements and experience the difference we can make for your business."]

  const trailerleasing =["Leasing a 53′ Dane trailer from M&J Trailer Leasing is a smart choice for many businesses. These trailers are designed to be sturdy and dependable, capable of carrying heavy loads over long distances. As they are typically made from high-quality materials, you can trust that your goods will remain safe and secure while in transit. What’s more, the only point of access to the trailer is through a loading dock, ensuring that your goods are protected from theft and damage. Overall, a 53′ trailers are an excellent investment for any business that needs to transport large quantities of goods safely and efficiently. With proper maintenance, it is sure to provide years of reliable service.","Leasing a 53′ trailer from M&J Trailer Leasing also provides businesses with some additional benefits. Due to their size and capacity, these trailers can help you save money on fuel costs. In addition, their larger loading area makes packing and unpacking goods easier and more efficient, as well as reducing the amount of time spent on loading and unloading. Furthermore, many 53′ trailers are equipped with a variety of features and amenities that make them even more convenient to use.","If you’re looking for an affordable, reliable option for shipping goods across long distances, then look no further than leasing a 53′ trailer from M&J Trailer Leasing. Whether you need to move heavy, oversized items or simply want to get your goods from one place to another quickly and safely, a 53′ trailer is sure to meet all of your shipping needs. With its durable construction, ample capacity, and convenient features, it’s no wonder that so many businesses choose this option when it comes time to transport their goods. Get in touch with a trailer leasing company today to learn more about how you can benefit from leasing a 53′ trailer for your business."]
  
  const imgsTrack = ["https://mjdispatch.com/wp-content/uploads/2022/12/1-400x300.jpg",'https://mjdispatch.com/wp-content/uploads/2022/12/6-400x300.jpg','https://mjdispatch.com/wp-content/uploads/2022/12/2-400x300.jpg',"https://mjdispatch.com/wp-content/uploads/2022/12/1-400x300.jpg",'https://mjdispatch.com/wp-content/uploads/2022/12/6-400x300.jpg','https://mjdispatch.com/wp-content/uploads/2022/12/2-400x300.jpg']
  return (
    <>
    <div className="trailer">
    <div className="xl:w-[80%] w-[95%] mx-auto py-32">
      <h1 className="text-white xl:text-5xl text-3xl font-bold text-center">
      Trailer Leases
      </h1>
    </div>
  </div>
  <div className="xl:w-[80%] w-[95%] mx-auto py-28">
    {data.map((item,idx)=>{
    return(
      <p key={idx} className="text-text-color text-lg py-4 leading-7">
      {item}
      </p>
        )
    })}
     <Image
      className="item2 xl:row-span-2 col-span-1 row-span-2 mx-auto bg-text-color rounded-3xl"
      width={150}
      height={150}
      alt="hero img"
      src={facebook}
    />
    <div className='grid grid-cols-3 gap-3 my-8'>
      {imgsTrack.map((item,idx)=>{
      return(
        <Image
        key={idx}
          className="item2 xl:row-span-2 col-span-1 row-span-2 mx-auto rounded-sm"
          width={500}
          height={500}
          alt="hero img"
          src={item}
        />
        )
      })}
    </div>
    <h1 className='text-gray-900 text-2xl p-5'>M&J Trailer Leasing</h1>
    {trailerleasing.map((item,idx)=>{
    return(
      <p key={idx} className="text-text-color text-lg py-4 leading-7">
      {item}
      </p>
        )
    })}
    <a href="">
    <Image
      className="item2 xl:row-span-2 col-span-1 row-span-2 mx-auto bg-text-color rounded-3xl"
      width={150}
      height={150}
      alt="hero img"
      src={facebook}
    />
    </a>
    </div>
    </>
  )
}

export default TrailerLeasesPage
