import Image from "next/image";
import React from "react";
import Insurance from '../../components/Insurance';
import phoneIcon from "../../assets/icons/phone.svg";

const PartnersPage = () => {
 const img = ["https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png","https://mjdispatch.com/wp-content/uploads/2022/12/EM-Motive-Transitional-w750px.png"]
  return (
    <>
    <div className="home">
      <div className="xl:w-[80%] w-[95%] mx-auto py-28">
        <h1 className="text-white xl:text-5xl text-3xl font-bold flex jus">
        Partners
        </h1>
      </div>
    </div>
    <div className='xl:w-[80%] w-[95%] mx-auto'>
<h1 className='text-green-700 text-3xl text-center font-bold my-10'>Companies We Endorse</h1>
<p className='text-xl text-text-color'>We have an extensive list of reputable partners that will help meet all your trucking needs. Give us a call today so we can direct you to the right path.</p>
<div className="flex justify-between flex-wrap gap-4 my-8">
  {img.map((item, idx)=>{
  return(
<Image
key={idx}
className="border border-gray-500 p-3 rounded-xl"
width={250}
height={250}
alt='hero img'
src={item}
/>
)
})}
</div>
    </div>
    <div className="callus">
        <div className="xl:w-[80%] w-[95%] mx-auto">
          <div className="flex justify-between flex-wrap py-8">
            <div>
              <h1 className="text-white text-3xl font-bold">Call Us Today!</h1>
              <h5 className="text-white text-2xl font-bold">
                Nationwide Dispatching Services Available
              </h5>
            </div>
            <a
              className="xl:text-3xl text-xl font-bold cursor-pointer flex gap-3 items-center"
              href="tel:+998500033940"
            >
              <Image width={45} height={45} alt="hero img" src={phoneIcon} />
              <span className="text text-gray-300">1.888.8.DISPATCH</span>
            </a>
          </div>
        </div>
      </div>
<Insurance/>
    </>
  );
};

export default PartnersPage;