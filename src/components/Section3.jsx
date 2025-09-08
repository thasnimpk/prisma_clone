import React from 'react'
import img15 from "../../src/assets/img2.jpg";

function Section3() {
    return (
        <>
            <div className='w-[100%] lg:h-[460px] bg-white flex items-center lg:flex-row flex-col gap-5   '>
                <div className='lg:w-[50%] flex justify-center h-auto '>
                    <div className='lg:w-[80%] lg:h-[422px] flex flex-col gap-5 justify-center m-5 '>
                        <h2 className='text-3xl font-bold h-[36px] max-w-[450px] text-gray-800 break-words mt-10'>  New Prisma Women Watches </h2>
                        <p className='h-[24px] max-w-[450px] text-gray-800 break-words mt-15'>The new AW22 collection is now available!</p>
                        <p className='h-[72px] max-w-[450px] text-gray-800 break-words'>Be surprised by stunning designs that make a beautiful impression. The new collection has a fabulous milanese strap with glitter or how about the new chronograph model?</p>
                        <div className='h-[46px] max-w-[450px] flex justify-baseline mt-5'>
                            <button className='bg-sky-600 text-white rounded-xl h-[46px] w-[225px] text-sm mt-5 hover:bg-blue-300 transition duration-200'>DISCOVER NEW COLLECTION</button>
                        </div>
                    </div>
                       </div>
                    <div className='lg:h-[450px] lg:w-[50%] sm:w-full'>
                        <img className='lg:h-[450px] w-[100%] mt-10' src={img15} alt="" />
                    </div>


             
            </div>
        </>
    )
}

export default Section3