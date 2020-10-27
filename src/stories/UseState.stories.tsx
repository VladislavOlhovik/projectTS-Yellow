import React, { useState } from "react";

export default {
  title: "useState demo",
};

function generateData(){
  //difficult counting
  console.log('generateData');
  return 1  
}


export const Example1 = () => {
  console.log('Example1');
  // const initState = useMemo(generateData,[])
  const [counter,setCounter]=useState<number>(generateData)
  // const change =(state:number)=>state+1
   
  return (
    <>
      <button onClick={()=>setCounter(state=>state+1)}>+</button>
      {counter}
    </>
  );
}