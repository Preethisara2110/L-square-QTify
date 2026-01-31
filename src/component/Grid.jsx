import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';

function Grid({data}) {
  const navigate = useNavigate();
  return (
    <div className=' flex flex-wrap justify-between gap-[20px] p-10 '> 
        { data?.map((item)=> <Card carddata={item} key={item.id} onClick={() => navigate("/details", { state: { details: item } })}/>)}
        <div className='grow'></div>
    </div>
  )
}

export default Grid