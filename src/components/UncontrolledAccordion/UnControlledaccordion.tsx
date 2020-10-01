import React, { useReducer, useState } from 'react';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    let [state, dispatch] = useReducer(reducer,{collapsed:false})

    return <div>
        <AccordionTitle title={props.titleValue} setstate={()=>dispatch({type:TOGGLE_COLLAPSED})}/>
        {!state.collapsed && <AccordionBody />}
    </div>
}
type AccordionBodyPropsType = {
    title: string    
    setstate: () => void
}
function AccordionTitle(props: AccordionBodyPropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={()=>props.setstate()}>-- {props.title} --</h3>
    );
}
function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UnControlledAccordion;