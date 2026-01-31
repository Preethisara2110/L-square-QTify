import React, { useState } from 'react'
import Grid from './Grid'

import { Button, Divider } from '@mui/material'
import Carusel from './carusel/Carusel'

const Section = ({data, name,menu,songhandler, uniqueName }) => {
  const [showToggol, setShowToggol] =  useState(false)
 // console.log("lllllll", menu);
  
  return (
    <div className=''>
        <div className="text-white! text-2xl! text-left font-bold px-10 pt-4 flex justify-between">{name} 
         { !menu &&  <Button className='text-green-500!' onClick={()=> setShowToggol(!showToggol)}>{!showToggol ? "Show all" : "Collapse"}</Button>}
          </div>
     { menu && <div className=' flex gap-2.5 px-5 py-1 justify-start '>
      {
        menu?.map((value) => <Button className='text-green-600! capitalize!' key={value.key} onClick={()=>songhandler(value.key)}> {value.label}  </Button>)
      }
           
          </div>
          }
        {showToggol?
          <Grid data={data} uniqueName={uniqueName}/>
          :
        <Carusel data={data} uniqueName={uniqueName}/>
        }
        <Divider className='mt-3! bg-green-600'></Divider>
    </div>
  )
}

export default Section