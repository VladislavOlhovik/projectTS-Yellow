import React, { useState, useRef, ChangeEvent } from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input',
  //component: Input,
};

export const UncontrolledInput = ()=><input />;

export const TrackValueOfUncontrolledInput = ()=>{
    const [value,setValue]=useState('')
    const Onchange=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }
return<><input onChange={Onchange}/>-{value}</>;
}
export const GetValueOfUncontrolledInputByButtonPress = ()=>{
    const [value,setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save=()=>{
        const el =inputRef.current as HTMLInputElement
        setValue(el.value)
    }
return<><input ref={inputRef} /> <button onClick={save}>save</button> - actual value:{value}</>;
}

export const ControlledInput = ()=>{
    const [parent,setParent]=useState('')
    const onChange=(el:ChangeEvent<HTMLInputElement>)=>{
        setParent(el.currentTarget.value)
    }
    return <input value={parent} onChange={onChange}/>
}
export const ControlledCheckbox = ()=>{
    const [parent,setParent]=useState(false)
    const onChange=(el:ChangeEvent<HTMLInputElement>)=>{
        setParent(el.currentTarget.checked)
    }
    return <input type='checkbox' checked={parent} onChange={onChange}/>
}
export const ControlledSelect = ()=>{
    const [parent,setParent]=useState<string|undefined>(undefined)
    const onChange=(el:ChangeEvent<HTMLSelectElement>)=>{
        setParent(el.currentTarget.value)
    }
    return <select value={parent} onChange={onChange}>
        <option >none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = ()=><input value={'it-incubator'}/>;
