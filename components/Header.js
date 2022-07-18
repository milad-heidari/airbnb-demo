import React, {useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/dist/client/router'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
function Header({placeholder}) {

  const router = useRouter()
  const [searchInputValue, setSearchInputValue] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const resetInput = () => {
    setSearchInputValue("")
  }

  const search = () => {
    router.push({
      pathname:'/search',
      query:{
        location:searchInputValue,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests
      }
    })
    setSearchInputValue("")
  }

  const handleSelect = (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)

  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div onClick={()=> router.push('/')} className='relative flex items-center h-10 cursor-pointer'>
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
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
        className='pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-grow '
          type='text'
          placeholder={placeholder || 'start your search'}
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
      {searchInputValue && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl font-semibold flex-grow ' >Number of Guests</h2>
            <UsersIcon className='h-5 w-5' />
            <input 
              type='number' 
              value={noOfGuests} 
              onChange={e => setNoOfGuests(e.target.value)} 
              min={1}  
              className='w-12 ml-2 pl-2 outline-none text-lg 
              text-red-400'/>
          </div>
          <div className='flex justify-around'>
            <button onClick={resetInput} className='text-gray-500' >cancel</button>
            <button onClick={search} className='text-red-400' >search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header