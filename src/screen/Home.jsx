import React, { useEffect, useState } from 'react'
import Header from '../component/Navbar'
// import Search from '../component/Search'
import Card from '../component/Card'
import Faq from '../component/Faq'
import Section from '../component/Section'
import { fetchdata } from '../api/allapiservice'
import Hero from '../component/Hero'

const Home = () => {
  const [topdata, setTopdata]= useState([])
   const [newdata, setNewdata]= useState([])
  const [songdata, setSongdata]= useState([])
   const [gendata, setGendata]= useState([])
   const [songfilter, setSongfilter]= useState(songdata)

  //       const fetchDataTop = async ()=>{
  //       const responcedata = await fetchdata('albums/top')
  //       console.log(responcedata);        
  //            setTopdata(responcedata)
  //     }

  //             const fetchDataSong= async ()=>{
  //       const responcedata = await fetchdata('songs')
  //       console.log(responcedata);        
  //            setSongdata(responcedata)
  //     }

  // useEffect( function(){
  //     fetchDataTop()
  //     fetchDataSong()
  // },[])



  useEffect(() => {
  const fetchAllData = async () => {
    try {
      const [topRes, newRes, songRes, genres] = await Promise.allSettled([
        fetchdata("albums/top"),
        fetchdata("albums/new"),
        fetchdata("songs"),
        fetchdata("genres"),
      ]);

    //  console.log("++++++", genres.value.data);

     setTopdata(topRes.value);
     setNewdata(newRes.value)
     setSongdata(songRes.value);
      setGendata(genres.value.data);
      setSongfilter(songRes.value)
    } catch (error) {
      console.error("API error:", error);
    }
  };

  fetchAllData();
}, []);

const songhandler=(cat)=>{
 // console.log(cat, songdata);
  const newdata = songdata.filter((item)=> item.genre.key == cat )
 // console.log("newdata", newdata);
  setSongfilter(newdata)
  
  
}

// const songFilter = ()=>{
     
// }

  return (
    <div className='flex-1'>

       <Hero />
        <Section data={topdata} name="Top Albums"   uniqueName='top'/>
        <Section data={newdata} name="New Albums"  uniqueName='new'/>
        <Section data={songfilter} name="Song" menu={gendata} songhandler={songhandler} uniqueName='song'/>

        <div className=' flex flex-col items-center '>
          <h2 className=' text-white text-6xl font-bold pb-9'>FAQs</h2>
          <Faq />
        </div>
        <div className='h-100'></div>
    </div>
  )
}

export default Home