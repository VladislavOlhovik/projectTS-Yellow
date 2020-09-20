import React, { useState } from 'react';

type activationType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}

export const UnControlledOnOff = (props: activationType) => {
    console.log('OnOff rendering');

    let [on, seton] = useState(props.defaultOn?props.defaultOn:false)//hook with init value

    console.log('On: ' + on);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onCicked = () => {
        seton(true)
        props.onChange(true)
    }
    const offCicked = () => {
        seton(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onCicked}>On</div>
        <div style={offStyle} onClick={offCicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}

