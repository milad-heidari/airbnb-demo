import React from 'react'
import Image from 'next/image'

function SmallCard({img,location,distance}) {
  return (
    <div className='
    flex 
    items-center
    m-2 
    mt-5 
    rounded-xl 
    hover:bg-gray-100 
    hover:scale-105
    hover:cursor-pointer 
    transition 
    duration-200
    transform
    ease-out
    space-x-4'>
      {/* Rigth */}
    <div className='relative h-16 w-16'>
      <Image src={img} alt="" layout='fill' className='rounded-xl'  />
    </div>
      {/* Left */}
    <div className=' '>

      <h2 className='font-bold'>{location}</h2>
      <h3 className='text-gray-500 font-semibold'>{distance}</h3>

    </div>
    </div>
  )
}

export default SmallCard