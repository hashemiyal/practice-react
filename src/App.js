import { useState,useRef,useCallback, useEffect, useMemo, useReducer } from "react";
import React from "react";
import  axios  from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import useBookSearch from "./useBookSearch";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import CurrencyRow from "./CurrencyRow";
import app from './app.css'
import FlashcardList from "./FlashcarLIst";
import userEvent from "@testing-library/user-event";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import List from "./List";

import useLocalStorage from "./useLocalStorage";
export let ThemeContext=React.createContext()
function App() {
  //  let [todos,setTodos]=useState([{id:1,name:'todo1',completed:false},{id:2,name:'todo2',completed:true},{id:3,name:'todo3',completed:false}]);
   
  // let [query,setQuery]=useState('');
  // let [pageNumber,setPageNumber]=useState(1);
  // function handlesearch(e){
  //  setQuery(e.target.value);
  //  setPageNumber(1);
  // };
  // let {books,loading,error,hasMore}=useBookSearch(query,pageNumber);
  // let observer=useRef();
  // let lastbookelref=useCallback((node)=>{
  // if(loading) return
  // if(observer.current) observer.current.disconnect();
  // observer.current=new IntersectionObserver((entries)=>{
  //   if(entries[0].isIntersecting && hasMore){
  //     setPageNumber((prevPageNumber)=>prevPageNumber+1);
  //   }
  // })
  // if(node) observer.current.observe(node);
  // },[loading,hasMore])

  // let [pokemon,setPokemon]=useState([]);
  // let[nextPageUrl,setNextPageUrl]=useState();
  // let [previousPageUrl,setPrevPageUrl]=useState();
  // let [currentPageUrl,setCurrentPageUrl]=useState(' https://pokeapi.co/api/v2/pokemon');
  // let [isPending,setIsPending]=useState(true);

  // function gotonextPage(){
  // setCurrentPageUrl(nextPageUrl);
  // }
  // function gotoprevPage(){
  // setCurrentPageUrl(previousPageUrl);
  // }
  // useEffect(()=>{
  // setIsPending(true);
  // axios.get(currentPageUrl).then((res)=>{
  // setPokemon(res.data.results);
  // setNextPageUrl(res.data.next);
  // setPrevPageUrl(res.data.previous);
  // setIsPending(false);
  // })

  // },[currentPageUrl]);
  // if(isPending) return (<div>Fetching...</div>);
  // let todoinput=useRef();
  // function handleaddtodo(){
  //   let newtodo={id:uuidv4(),name:todoinput.current.value,completed:false};
  //   setTodos((prevTodos)=>{
  //    return [...prevTodos,newtodo]
  //   });

  // }
  // function toggleCheck (id){
  //  let newtodos=[...todos]
  //  let todo=newtodos.find((todo)=>{return todo.id===id});
  //  todo.completed=!todo.completed;
  //  setTodos(newtodos);
  // }
  // function handleclear(){
  
  // let stayedtodos=todos.filter((todo)=>{
  //   return !todo.completed
  // });
  // setTodos(stayedtodos);
  // }
//  let [currencyOptions,setCurrencyOptions]=useState([]);
//  let [fromCurrency,setFromCurrency]=useState();
//  let [toCurrency,setToCurrency]=useState();
//  let[amount,setAmount]=useState(1);
//  let [amountinfromcurrency,setAmountinfromcurrency]=useState(true);
//  let[exchangerate,setExchangerate]=useState();
//  console.log(exchangerate)
//  let toamount=0;
//  let fromamount=0;
//  if(amountinfromcurrency){
//  fromamount=amount;
//  toamount=(amount*exchangerate);
//  }
//  else{
//   toamount=amount;
//   fromamount=(amount/exchangerate);
//  }
//   useEffect(()=>{
//     axios({
//       method:'GET',
//       url:'https://api.exchangeratesapi.io/v1/latest',
//       params:{access_key:'46b3ec4923890371791da2510198f3ea'},
//      }).then((res)=>{
//       setCurrencyOptions([res.data.base,...Object.keys(res.data.rates)])
//       setFromCurrency(res.data.base);
//       setToCurrency(Object.keys(res.data.rates)[0])
      
//       setExchangerate(res.data.rates[Object.keys(res.data.rates)[0]])
      
//      })
//   },[])
  

//   function onchangefromamount(e){
//   setAmount(e.target.value);
//   setAmountinfromcurrency(true);
//   }
//   function onchangetoamount(e){
//   setAmount(e.target.value);
//   setAmountinfromcurrency(false);
//   }
//  useEffect(()=>{

//     fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=46b3ec4923890371791da2510198f3ea&base=${fromCurrency}&symbols=${toCurrency}`).then((res)=>res.json()).then((data)=>{setExchangerate(data.rates[toCurrency])}).catch((er)=>console.log(er))

 
//  },[fromCurrency,toCurrency])

// let [flashcards,setFlashcards]=useState([]);
// let [categories,setCategories]=useState([]);
// let categoryEl=useRef();
// let amountEl=useRef();

//  function decodestr(str){
//   let textarea=document.createElement('textarea');
//    textarea.innerHTML=str;
//    return textarea.value;
//  }
//  function handleSubmit(e){ 
//   e.preventDefault();
//   axios.get('https://opentdb.com/api.php',{
//     params:{
//       amount:amountEl.current.value,
//       category:categoryEl.current.value
//     }
//   }).then((res)=>{
//     let data= res.data.results.map((result,index)=>{
//       let options=[...result.incorrect_answers,result.correct_answer]
//       return {
//       id:`${index}-${Date.now()}`,
//       question:decodestr(result.question),
//       answer:result.correct_answer,
//       options:options.sort(()=>Math.random()-0.5)
//       }
//      });
//      setFlashcards(data)
//   })


//  } 
//  useEffect(()=>{
//  axios.get('https://opentdb.com/api_category.php').then((res)=>{setCategories(res.data.trivia_categories)})
//  },[])
//  let[number,setNumber]=useState(4);
//  let [dark,setDark]=useState(false);
// let doublenumb= useMemo(()=>{
//  return doublenumber(number)
//  },[number])



//  function doublenumber(number){
//   for(let i=0;i<=1000000000;i++){

//   }
//   return number*2;
//  } 
 
//  let themeStyles=useMemo(()=>{
//   return {backgroundColor:dark?'black':'white',color:dark?'white':'black'}
//  },[dark])

//  useEffect(()=>{
//   console.log('theme changed')
// },[themeStyles])
  // let [darktheme,setDarktheme]=useState(true);
  // function ToggleTheme(){
  // setDarktheme((prev)=>{return prev=!prev})
  // }
  // function reducer(todos,action){
  // switch(action.type){
  //   case 'add_todo':

  //    return [...todos,newtodo(action.data.name)]
  // }
  // }
  // function newtodo(name){
  //   return {id:Date.now(),name:name,completed:false}
  // }
  
  // let [todos,dispatch]=useReducer(reducer,[{id:2,name:'ahmad',completed:true}])
  // let [name,setName]=useState('')
  // function handlesubmit(e){
  // e.preventDefault();
  // dispatch({type:'add_todo',data:{name:name}})
  
  // }
//   let[number,setNumber]=useState(1);
//   let [dark,setDark]=useState(false); 
//   let theme={
//     backgroundColor:dark?'#333':'#CCC',
//     color:dark? '#CCC':'#333'
//   }
// let getItems=useCallback((incrementor)=>{
// return [number,number+incrementor+1,number+incrementor+2]
// },[number])
 let [text,settext]=useLocalStorage('input','')
 
  return (
  <>  
     <input type="text" name="" id="" onChange={(e)=>{settext(e.target.value)}}/>
     {/* <div style={theme}>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <button onClick={()=>{setDark(!dark)}}>togle theme</button>
       <List getItems={getItems}/>
     </div> */}
     {/* <form action="" onSubmit={handlesubmit}>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <button>submit</button>

     </form> */}
     {/* <ThemeContext.Provider value={darktheme}>
      <button onClick={ToggleTheme}>Toggle Theme</button>
      <ClassContextComponent/>
      <FunctionContextComponent/>
     </ThemeContext.Provider> */}

    {/* <input type="text" onChange={handlesearch}/>
    {books.map((book,index)=>{
      if(books.length===index+1){
        return <div ref={lastbookelref} key={book}>{book}</div>
      }else{
        return <div key={book}>{book}</div>
      }
      
    })}
    {loading&& <div>Loading...</div>}
    {error && <div>Error happend...</div>} */}
    {/* <TodoList todos={todos} toggleCheck={toggleCheck}/>
    <input type="text" ref={todoinput}/>
    <button onClick={handleaddtodo}>add todo</button>
    <button onClick={handleclear}>clear completed</button>
    <div>{todos.filter((todo)=>!todo.completed).length} left to todo~!</div> */}
    {/* <h1>Convert</h1>
    <CurrencyRow currencyOptions={currencyOptions} selectedcurrency={fromCurrency} onchangecurrency={(e)=>{setFromCurrency(e.target.value)}} amount={fromamount} onchangeamount={onchangefromamount}/>
    <div className="equals">=</div>
    <CurrencyRow currencyOptions={currencyOptions} selectedcurrency={toCurrency} onchangecurrency={(e)=>{setToCurrency(e.target.value)}} amount={toamount} onchangeamount={onchangetoamount}/> */}
    
    {/* <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
  <div className="container">
 <FlashcardList flashcards={flashcards}/>
  
  </div> */}
  {/* <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
  <button onClick={()=>{setDark(!dark)}}> change theme</button>
  <div style={themeStyles}>{doublenumb}</div> */}
  
  
  </>
  );
}

export default App;
