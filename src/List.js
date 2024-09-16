import { useEffect, useState } from "react";

const List = ({getItems}) => {
    let [items,setItems]=useState([])
    useEffect(()=>{
    setItems(getItems(2))
    console.log('updating itmes')
    },[getItems])
    return (
        items.map((item)=>{
            return <div key={item}>{item}</div>
           })
    )
       
   
}
 
export default List;