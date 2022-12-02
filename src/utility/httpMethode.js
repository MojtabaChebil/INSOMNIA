import axios from 'axios'
export const getAPI = async (url) => {
  
    const res = await axios.get(`/${url}`, {
  headers: {'Access-Control-Allow-Origin': '*'} 
    })
     
    return res;
  }