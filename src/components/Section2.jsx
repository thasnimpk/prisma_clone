import React from 'react'
import img14 from "../../src/assets/img1.jpg";

function Section2() {
    return (
        <>
            <div className='w-[100%] lg:h-[532px] bg-white flex items-center lg:flex-row flex-col gap-5 mt-6  '>
                <div className='lg:h-[450px] lg:w-[50%] sm:w-full'>
                    <img className='h-[450px]  w-[100%]' src={img14} alt="" />
                </div>
                <div className='lg:w-[50%] flex justify-center h-auto'>
                    <div className='lg:w-[80%] lg:h-[422px] flex flex-col lg:items-start gap-9 justify-center m-5'>
                        <h2 className='text-3xl font-bold h-[36px] max-w-[450px] text-gray-800 break-words '>  New Prisma Men Watches </h2>
                        <p className='h-[24px] max-w-[450px] text-gray-800 break-words mt-5'>Boost your style this season with your favorite accessory!</p>
                        <p className='h-[72px] max-w-[450px] text-gray-800 break-words'>Superb diver and chronograph designs for men. Also a stylish slimline collection that fits perfectly with the business or casual outfit.</p>
                        <div className='h-[46px] max-w-[450px] flex justify-baseline'>
                            <button className='bg-sky-600 text-white rounded-xl h-[46px] w-[225px] text-sm hover:bg-blue-300 transition duration-200'>DISCOVER NEW COLLECTION</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Section2