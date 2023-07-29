import  React,{useState} from 'react';

const EventTarget=()=>{
    const [num,setNum]=useState(0);

    const EventChange=(event)=>{
        console.log("Changed");
        setNum(event.target.value);
    };

    return <form>
        <input type='text' onChange={EventChange}/>
        <button onClick="{}">Click Me</button>
    </form>
}

export default EventTarget;