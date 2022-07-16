import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] '>
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout='fill'
        objectFit='cover'
        alt=''
      />

      <div className='absolute top-1/2 w-full text-center' >
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md cursor-pointer rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>i am flexible</button>
      </div>
    </div>
  )
}

export default Banner