import React from 'react'
import img81 from "../../src/assets/logo1.png";
import img82 from "../../src/assets/logo2.png";
import img83 from "../../src/assets/log03.png";
import img84 from "../../src/assets/logo4.png";
import img85 from "../../src/assets/logo5.png";
import img86 from "../../src/assets/logo6.png";
import img87 from "../../src/assets/logo7.png";
import img88 from "../../src/assets/arr.png";
import { useState } from 'react';



function Section9() {
  const [arrow, setarrow] = useState()

  const button = () => {
    setarrow(!arrow)
  }





  return (
    <>
      <div className=' h-auto w-full '>
        <div className='bg-gray-100 w-full'>
          <div className='h-auto items-center justify-center border-b-gray-200 border-b-2 lg:flex ml-9'>
            <div className='h-[325px] w-[40%] items-center flex '>
              <img className='h-[255px] w-[285px]' src={img81} alt="" />
            </div>
            <div className='h-[203px] w-[30%] font-bold text-sm  justify-center flex flex-col'>
              <div className='h-[200px] flex flex-col '>
                <h3 className='h-[40px] '>TERMS & CONDITIONS</h3>
                <div className='h-[87px]  gap-5 list-none'>
                  <li className='h-[34px] '>Shipment Policy</li>
                  <li className='h-[34px] '>Privacy Statement</li>
                  <li className='h-[22px] '>Terms & Conditions</li>
                </div>
              </div>
            </div>
            <div className='h-[203px] w-[35%] text-sm font-bold '>
              <div className='h-[100px] w-[50%] '>
                <h3 className='h-[45px] '>GET CONNECTED</h3>
                <div className='w-[309px] h-[88px] justify-between grid grid-cols-5'>
                  <img src={img82} alt="" className='h-[24px] w-[24px]' />
                  <img src={img83} alt="" className='h-[24px] w-[24px]' />
                  <img src={img84} alt="" className='h-[24px] w-[24px]' />
                  <img src={img85} alt="" className='h-[24px] w-[24px]' />
                  <img src={img86} alt="" className='h-[24px] w-[24px]' />
                  <img src={img87} alt="" className='h-[24px] w-[24px]' />
                </div>
              </div>

            </div>
            <div className='h-[204px] text-sm '>
              <div className='h-[124px] w-[50%]'>
                <div className='h-[40px]'>
                  <h3 className=' font-bold'>KEEP ME POSTED!</h3>
                </div>
                <div className='h-[78px] w-[50%] flex justify-between flex-col mr-6'>
                  <div className='h-[35px] '>
                    <input placeholder='email address' type="text" className='text-gray-400 bg-white w-[330px] h-[32px] rounded-xs' />
                  </div>
                  <div className='flex gap-1 items-center '>
                    <select className='bg-white h-[40px] w-[150px] text-gray-400 mt-2 text-center rounded-xs'>
                      <option className='hover:bg-gray-400 transition bg-white cursor-pointer h-[25px] '>    </option>
                      <option className='hover:bg-gray-400 transition hover:text-white cursor-pointer h-[25px] pl-2  text-gray-400 text-start'>Men's Watches</option>
                      <option className='hover:bg-gray-400 duration-100 hover:text-white transition-transform cursor-pointer h-[25px] pl-2 text-gray-400 text-start'>Women's Watches</option>
                    </select>
                    <div className='bg-zinc-300 h-[32px] p-2 items-center justify-center flex font-bold text-white rounded-xs hover:bg-zinc-400 duration-300'>SUBSCRIBE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[130px] flex w-full bg-gray-100 justify-center items-center text-gray-500 text-sm font-sans'>© Prisma Watches | All rights reserved 1948 - 2024 </div>
      </div>

    </>
  )
}

export default Section9