import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    onClick: (value: any) => void
    items: ItemType[]
    titles:string
}

export function SelectMy(props: SelectPropsType) {
    const input={
        border:'red solid 1px',
        backgroundColor:'#8E6BC7',
        color:'red',
        width:'50px',
        padding:'5px'
    }
    const select={
        border:'red solid 1px',
        backgroundColor:'#8E6BC9',
        color:'black',
        width:'50px',
        padding:'5px'
    }
    return (
        <div>
            <div style={input} onClick={props.onChange}>{props.titles}</div>
            {props.value&&props.items.map((el) => <div key={el.value} style={select} onClick={()=>props.onClick(el.title)}>{el.title}</div>)}

        </div>
    )

}