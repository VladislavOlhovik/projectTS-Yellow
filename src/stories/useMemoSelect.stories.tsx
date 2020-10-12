import React, { ChangeEvent, useMemo, useState } from "react";

export default {
    title: "useMemoSelect",
  };
  const items =[{ title: 'Moscow', value: 1, countryId:1, population: 10500000},
   { title: 'Omsk', value: 2, countryId:1, population: 1500000},
   { title: 'Saint Petersburg', value: 3, countryId:1, population: 1500000},
   { title: 'Minsk', value: 4, countryId:2, population: 1600000},
   { title: 'Grodno', value: 5, countryId:2, population: 400000},
   { title: 'Pinsk', value: 6, countryId:2, population: 100000},
   { title: 'Kiev', value: 7, countryId:3, population: 2000000},
   { title: 'Odessa', value: 8, countryId:3, population: 1200000},
   { title: 'Kherson', value: 9, countryId:3, population: 900000}]
  

  const Select = (props:SelectPropsType)=>{
    console.log('Select');
    const [value,setValue]=useState(1)
    
    const onChange=(el:ChangeEvent<HTMLSelectElement>)=>{
        setValue(+el.currentTarget.value)
    }
    return (
      <select value={value} onChange={onChange}>
        {props.items.map(i=>{
            return <option key={i.value} value={i.value}>{i.title}</option>
        })}
      </select>
    );
}

const SelectMemo = React.memo(Select)

export const HelpsExample = () => {
    const [counter,setCounter] = useState(0)
    let itemsForM = useMemo(()=>items.filter(el=>el.title.toLocaleLowerCase().indexOf('m')>-1),[])
    let itemsForRB = useMemo(()=>items.filter(el=>el.countryId==2),[])
    let itemsPopulation = useMemo(()=>items.filter(el=>el.population>1000000),[])
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
      </div>
      <SelectMemo items={itemsForM} />
      <SelectMemo items={itemsForRB} />
      <SelectMemo items={itemsPopulation} />
    </>
  );
};

type SelectPropsType = {
    items: ItemType[]
}
type ItemType = {
  title: string
  value: number
  countryId: number
  population: number
}


