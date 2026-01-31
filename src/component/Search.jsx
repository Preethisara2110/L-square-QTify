import React from 'react'

const Search = ({placeholder}) => {
  return (
    <div className='flex justify-between items-stretch bg-white border border-gray-900 rounded-sm min-w-[360] w-[27%] pl-5 '> 
        <input type='text' placeholder={placeholder} className=' w-full outline-0 ' />
        <div className='border-l border-gray-900 px-5 py-3'><img src='searchicon.svg'  /> </div>
    </div>
  )
}

export default Search