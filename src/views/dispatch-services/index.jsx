import DruckDispatch from '../../components/truck-dispatch';
import ContactInfo from '../../components/contact-info';
import WhatWeDo from '../../components/what-we-do';
import Nontract from '../../components/no-contract';
import FormSendMesage from "../../components/FormSendMesage/index";
export const DispatchServicesPage = () => {
  return (
    <>
    <div className="home">
      <div className="xl:w-[80%] w-[95%] mx-auto py-28">
        <h1 className="text-white xl:text-5xl text-3xl font-bold">
          Dispatch Services
        </h1>
      </div>
    </div>
    <div className='grid xl:grid-cols-3 grid-cols-1  xl:gap-12 gap-0  xl:w-[90%] w-[95%] mx-auto'>
    <div className="item1 xl:col-span-2 col-span-2 row-span-1">
    <DruckDispatch/>
<div className='py-5'>
  <WhatWeDo/>
</div>
    </div>
    <div className='item2 xl:row-span-2 col-span-1 row-span-2 xl:mt-12 -mt-12'>
    <FormSendMesage />
    <ContactInfo/>
    </div>
    </div>
    <Nontract/>
    </>
  );
};
