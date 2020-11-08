import HWClock from './HWClock';
import React, { useState } from 'react';

export default {
  title: 'HWClock',
  component: HWClock
};

export const HWBaseExample = ()=>{
  const [mode,setMode] = useState(true)
  return (
    <>
      <button onClick={()=>setMode(!mode)}>{mode?'Analog Clock':'Digital Clock'}</button>
      <HWClock mode={mode} />
    </>
  );
}

