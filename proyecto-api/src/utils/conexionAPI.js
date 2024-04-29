import { json } from "react-router-dom"


const API = "https://randomuser.me/api/" 


export const  get=(path)=>{

    return( fetch(API+path))
   .then((result)=>result.json())      
}


/* export const getAxios = async (path) => {
  try {
    let resPost = await axios(
      `https://randomuser.me/api//${path}`
    );   
    } catch (error) {
      console.log(error);
    }
  }; */
  
