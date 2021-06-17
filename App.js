import React,{useEffect, useState} from 'react';
import Meeting from './Meeting';
function App(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    document.title=`you are logout ${count} times`;
  });


  return (
    <div className="App">
      <ul className='log'>
        <button className="hello" onClick={()=>setCount(count+1)} value={count}>Logout</button>
      </ul>
   <h1>Meeting Room Booking</h1>
   
     <Meeting />
    </div>
  );
 }


export default App;