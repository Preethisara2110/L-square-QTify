
import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom";



const Details = () => {
  
  const nxtRef = useRef()
const { state } = useLocation();
const { description, follows, image , title, songs} = state.details
const [songlist, setSonglist] = useState([])
const [count, setCount] = useState({start:0, end:5})
const pagination = (direction)=>{
  setCount((prev)=>{
if(direction==='nxt') return {start:prev.end, end:prev.end + 5}
if(direction==='prev') return { start: Math.max(prev.start - 5, 0), end: Math.max(prev.end - 5, 5),}
return prev
  })
  // if(direction==='nxt'){
  //   setCount({start:count.end, end:count.end + 5})
  // }  else if(direction==='prev') {
  //   console.log("prev");
    
  //    setCount(prev=> ({
  //    // start:prev.start - 5, end:prev.end-5
  //     start: Math.max(prev.start - 5, 0),
  //       end: Math.max(prev.end - 5, 5),
  //   }))
  // } else{
  //   setCount({start:count.end, end:count.end + 5})
  // }
  
 //const list = songs.slice(count.start, count.end)
 
 
// setSonglist(list)
}
useEffect(() => {
     const funclist = ()=>{
     const list = songs.slice(count.start, count.end);
     console.log(count.start, count.end,list, songs.length);
     if(count.end > (songs.length -5)){  nxtRef.current.disabled=true }//console.log("over");
  setSonglist(list); 
     };
 funclist()
  
}, [count, songs]);

// useEffect(()=>{
//   const funclist = ()=>pagination();
// funclist()
// },[])
//console.log("location", songs, songlist);
    return (
       <div className='flex-1 px-10 pt-5'>
        
      <div className='flex gap-3 '>
        <div className=''>
     <img
            src={image}
            alt={`${title} cover`}
            className="h-[300px]"
          />
        </div>
        <div className=' text-amber-50 text-left'>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>75 songs . 3 hr 45 min . {follows} Follows</p>
          <div>
            <Button variant="contained" className='bg-green-600!'>Shuffle</Button> <Button variant="outlined" className=' text-green-600!'>Add to library</Button>
          </div>
        </div>
      </div>


<div>
  <div className='pagination'><Button onClick={()=>pagination("prev")} >prev</Button> 
        <Button onClick={()=>pagination("nxt")} ref={nxtRef} >next</Button> </div>
  <div className=' flex justify-between text-white items-center h-[60px] border-b border-cyan-50 '>
     <span className='flex w-[40%] items-center gap-2'>Title</span>
    <span>Artist</span>
    <span>Duration</span>
  </div>

{
  songlist?.map(item=>{
    return(
    <div key={item.id} className=' flex justify-between text-white items-center h-[60px] border-b border-cyan-50 '>
    <span className='flex w-[40%] items-center gap-2'> <img
                src={item.image}
                alt={`${item.title} thumbnail`}
                className="w-7"
              /> {item.title}</span>
    <span>{item.artists[0]}</span>
    <span>{item.durationInMs}</span>
  </div>  
    )
  })
}
  
</div>

   </div> 
    )
}

export default Details