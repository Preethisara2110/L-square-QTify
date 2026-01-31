import React from 'react'

import { Link } from 'react-router-dom'
import Feedbackbtn from './feedback/Feedbackbtn'
import Search from './Search'
// {children}
const Navbar = () => {
  return (
    <div className='bg-green-500 px-3.5 py-2.5 justify-between items-center flex '>
      <Link to='/' ><img src='logoq.png' alt="qtfy" /></Link> 
      <Search placeholder="Search a song of your choice"/>
{/* {children} */}
       <Feedbackbtn text='Give Feedback' />
    </div>
  )
}

export default Navbar