import React from 'react'
import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer'>
        <Image 
          src='https://links.papareact.com/qd3'
          layout="fill"
          alt='airbnb icon'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='flex  md:border-2 md:shadow-sm items-center py-2 rounded-full'>
        <input
          className='pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-grow '
          type='text'
          placeholder='start your search'
        />
        <SearchIcon
          className='active:scale-90 transition duration-150 hidden md:inline-flex h-8 md:mx-2 p-2 cursor-pointer bg-red-400 rounded-full text-white'
        />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex sm:hover:shadow-lg sm:transition sm:duration-150 sm:active:scale-90 border-gray-400 cursor-pointer space-x-2 items-center border-2 rounded-full p-2'>
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  )
}

export default Header