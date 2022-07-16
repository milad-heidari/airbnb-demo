import React from 'react'
import Image from "next/image";

function LargeCard({img,title,description,buttonText}) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image src={img} alt='' className='rounded-2xl' objectFit='cover' layout='fill'/>

      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl w-64 mb-3 font-bold'>{title}</h3>
        <p >{description}</p>
        <button className='text-white bg-gray-900 mt-5 px-4 py-2 rounded-lg'>{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard