import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/accordion';
import { Rating, RatingValueType } from './components/rating/Rating';
import { UnControlledOnOff } from './components/UnControlledOnOff/UnControlledOnOff';
import UnControlledAccordion from './components/UncontrolledAccordion/UnControlledaccordion';
import { UncontrolledRating } from './components/UnControlledrating/UncontrolledRating';
import { OnOff } from './components/OnOff/OnOff';

function App() {
  console.log('App rendering');
  let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
  let [accordionValue, setAccordionValue] = useState<boolean>(false)
  let [on,setOn] = useState(false)
  return (
    <div className={'App'}>
      {/* <OnOff setOn={setOn} on={on}/> */}
      {/* <UnControlledAccordion titleValue={'Menu'} /> */}
      {/* <UnControlledAccordion titleValue={'Users'} /> */}
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
      <UnControlledOnOff onChange={setOn} /> {on.toString()}
      <Accordion titleValue={'Menu'} collapsed={accordionValue} onClick={()=>setAccordionValue(!accordionValue)}/>
      {/* <PageTitle title={'This si APP component'}/>
      <PageTitle title={'My friend'}/>
      Article 1
      <Rating value={3}/> */}
      {/* <Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <OnOffMy activation={true}/> */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}


export default App;
