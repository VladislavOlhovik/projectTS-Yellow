import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './select-my';

export default {
  title: 'Select',
  component: Select,
};
export const SelectMode = ()=>{
    const [val,setVal]=useState<boolean>(false)
    const [titles,setTitles]=useState<string>('Name')
return <Select items={[{title:'dimych',value:1},{title:'volera',value:2},
               {title:'artem',value:3}]} value={val} onChange={()=>setVal(!val)}
               titles={titles} onClick={(title)=>{
                   setTitles(title) 
                   setVal(!val)}}/>
}


