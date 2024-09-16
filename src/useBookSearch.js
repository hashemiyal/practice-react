import axios from "axios";
import { useEffect, useState } from "react";

const useBookSearch = (query,pageNumber) => {
    const [books,setBooks]=useState([]);
    const[error,setError]=useState(false);
    const [hasMore,setHasMore]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setBooks([])
        },[query]);
    useEffect(()=>{ 
        setLoading(true);
        setError(false);
        let cancel;
        axios({
         method:'GET',
         url:'https://openlibrary.org/search.json',
         params:{q:query,page:pageNumber},
         cancelToken:new axios.CancelToken(c=>cancel=c)
        }).then((res)=>{
          
          setBooks((prevBooks)=>{
          return [...new Set([...prevBooks,...res.data.docs.map((b)=>b.title)])];
          });
          console.log(books);
          setHasMore(res.data.docs.length>0);
          setLoading(false);
        }).catch(er=>{
          
         if(axios.isCancel(er)) return
         setError(true);
        })
        return ()=>cancel();
    },[query,pageNumber]);
    return {books,loading,error,hasMore};
}
 
export default useBookSearch;