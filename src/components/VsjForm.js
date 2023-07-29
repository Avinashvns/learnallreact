import React,{useState} from "react";

const VsjFrom=()=>{
    const [n1,setN1]=useState(0);
    const[n2,setN2]=useState(0);

    // setN1
    const n1ChangeHandler=(event)=>{
        
        console.log("Amount Changed");
        console.log("N1 Changed");
        console.log(event.target.value);
        setN1(Number(event.target.value));
    }

    // setN2
    const n2ChangeHandler=(event)=>{
        
        console.log("N2 Changed");
        console.log(event.target.value);
        // setEnteredAmount(event.target.value);
        setN2(Number(event.target.value));
    }

    return <form>
        <label>N1</label>
        <input type="text" onChange={n1ChangeHandler}/>
        <h1>{n1}</h1>
        {/* Second handler */}
        <label>N2</label>
        <input type="text" onChange={n2ChangeHandler}/>
        <h1>{n2}</h1>
        <h1>{n1+n2}</h1>


    </form>

}

export default VsjFrom;