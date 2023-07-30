import React,{useState,useEffect} from 'react';

function LearnState(){
    // Use Sate variable
    const [num, setNum]=useState(0);
    const [dbl,setDbl]=useState(0);
    // 
    useEffect(() => {
        setDbl(num*2);
        console.log(`Effected ${dbl}`);
      }, [num]);
      const handler=(event)=>{
        
        console.log("N2 Changed");
        setNum(num+1);
    }
    return<p>
        <h1>{num}</h1>
        <h3>{dbl}</h3>
        <button onClick={handler} >+</button>
        </p>;
}
export default LearnState;