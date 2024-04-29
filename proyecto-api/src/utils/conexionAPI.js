import { json } from "react-router-dom"


const API = "https://randomuser.me/api/" 


export const  get=(path)=>{

    return( fetch(API+path))
   .then((result)=>result.json())      
}