import { useEffect, useRef, useState } from "react";

const Flashcard = ({flashcard}) => {
    
    let [flip,setFlip]=useState(false);
    let [height,setHeight]=useState('initial')
    let frontel=useRef();
    let backel=useRef();


    function setmaxheight(){
     let frontheight=frontel.current.getBoundingClientRect().height;
     let backheight=backel.current.getBoundingClientRect().height;
     setHeight(Math.max(frontheight,backheight))
     
    }
    useEffect(()=>{
        setmaxheight()
    },[flashcard.question,flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setmaxheight)
        return () => window.removeEventListener('resize', setmaxheight)
      }, [])
    return ( 
     <div onClick={()=>{setFlip(!flip)}} className={`card ${flip ? 'flip':''}`} style={{height:height}}>
        <div className="front" ref={frontel}>
            {flashcard.question}
        <div className="flashcard-options">
         {flashcard.options.map((option)=>{
            return <div className="flashcard-option" key={option}>{option}</div>
         })}
        </div>
        </div>
       
        <div className="back" ref={backel}>
        {flashcard.answer}
        </div>
        </div>
     );
}
 
export default Flashcard;