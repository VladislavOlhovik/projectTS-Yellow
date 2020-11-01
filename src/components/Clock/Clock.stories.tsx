import Clock from './Clock';
import React, { useState } from 'react';

export default {
  title: 'Clock',
  component: Clock
};

export const BaseExample = ()=>{
  const [mode,setMode] = useState(true)
  return (
    <>
      <button onClick={()=>setMode(!mode)}>{mode?'Analog Clock':'Digital Clock'}</button>
      <Clock mode={mode} />
    </>
  );
}

