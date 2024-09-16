import { useEffect, useState } from "react";
function SavedValue(key,initialvalue){
let savedvalue=JSON.stringify(localStorage.getItem(key));
if(savedvalue) return savedvalue;
if(initialvalue instanceof Function) return initialvalue()
    return initialvalue;
}
const useLocalStorage= (key,initialvalue) => {
   let[value,setValue]=useState(()=>{
    return SavedValue(key,initialvalue)
   })

   useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
    
   },[value])
   return[value,setValue];
}
 
export default useLocalStorage
;