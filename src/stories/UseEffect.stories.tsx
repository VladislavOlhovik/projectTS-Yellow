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

export const SetIntervalExample = () => {
  console.log('SetTimeoutExample');
  const [counter,setCounter]=useState<number>(1)
  const [date, setDate] = useState<string>();



  useEffect(()=>{
    let count = setInterval(()=>{
      console.log('count');
      setCounter(state=>state+1)
      setDate(new Date().toLocaleString())
    },1000)
    return ()=>{
      clearInterval(count)
    }
  },[])
  
 
  return (
    <>
    Hello counter:{counter}
      Clock: {date}
    </>
  );
}
export const ResetEffectExample = () => {
  const [counter,setCounter]=useState<number>(1)
  console.log('Component render with ' + counter);

  useEffect(()=>{
    console.log('Effect occured '+counter);
    return ()=>{
      console.log('RESET Effect '+counter);
    }
  },[counter])
  
  const increase = () => setCounter(counter+1)

  return (
    <>
      Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
  );
}
export const KeysTrackerExample = () => {
  const [text,setText]=useState<string>('')
  console.log('Component render with ' + text);

  useEffect(()=>{
    const handler = (e:KeyboardEvent) => {
      console.log(e.key);
      setText(text+e.key)
    }
    window.addEventListener('keypress',handler)
    return ()=>{
      window.removeEventListener('keypress',handler)
    }
  },[text])
  

  return (
    <>
      Typed text: {text}
    </>
  );
}
export const SetTimeoutExample = () => {
  const [text,setText]=useState<string>('')
  console.log('Component render with ' + text);

  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      console.log('TIMEOUT EXPIRED');
      setText('3 seconds passed')
    },5000)
    return ()=>{
      clearInterval(timeoutId)
    }
  },[text])
  

  return (
    <>
      text: {text}
    </>
  );
}
