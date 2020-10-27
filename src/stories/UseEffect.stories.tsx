import React, { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  console.log('SimpleExample');
  const [counter,setCounter]=useState<number>(1)
  const [fake,setFake]=useState<number>(1)

  useEffect(()=>{
    console.log('useEffect every render');
    document.title=counter.toString()
  })
  useEffect(()=>{
    console.log('useEffect only first render (componentDidMount)');
    document.title=counter.toString()
  },[])
  useEffect(()=>{
    console.log('useEffect first render and every counter change');
    document.title=counter.toString()
  },[counter])
  return (
    <>
    Hello counter-{counter}
      <button onClick={()=>setCounter(state=>state+1)}>Counter+</button>
      <button onClick={()=>setFake(state=>state+1)}>Fake+</button>  
      -fake-{fake}    
    </>
  );
}

export const SetTimeoutExample = () => {
  console.log('SetTimeoutExample');
  const [counter,setCounter]=useState<number>(1)
  const [date, setDate] = useState<string>();



  useEffect(()=>{
    setInterval(()=>{
      setCounter(state=>state+1)
    },1000)

  },[])
  setInterval(() => {
    let date = new Date().toLocaleString()
    setDate(date)
  }, 1000);
 
  return (
    <>
    Hello counter:{counter}
      Clock: {date}
    </>
  );
}
