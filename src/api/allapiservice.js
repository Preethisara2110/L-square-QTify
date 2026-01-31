import axios from "axios"

const config = 'https://qtify-backend.labs.crio.do'


 export const fetchdata = async (endpoint)=>{
 
      try {
        const res = await axios.get(`${config}/${endpoint}`)
        console.log(res, "-------");
        return res.data
        
      } catch (error) {
        console.log(error);
        
      }
 }