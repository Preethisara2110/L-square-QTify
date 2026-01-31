import React from 'react'

const Card = ({carddata, onClick }) => {

  
  return (
    <div className='w-[200px] cursor-pointer '  onClick={onClick}>
    <div className='rounded-md overflow-hidden'>
        <img src={carddata?.image} />
        <div className=' bg-white flex items-center p-1.5 '>
            <div className='bg-black text-amber-50 rounded-3xl px-2 py-0.5 text-[12px]'>{carddata?.follows} Follows</div>
        </div>
    </div>
    <div className=' text-white'>{carddata?.title}</div>
    </div>
  )
}

export default Card