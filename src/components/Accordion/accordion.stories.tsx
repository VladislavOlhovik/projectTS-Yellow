import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};
const callback = action('accordion mode change event fired')
const onClickCallback = action('some items was clicked')
export const MenuCollapsedMode = ()=><Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                onClick={onClickCallback}/>;
export const UserUncollapsedMode = ()=><Accordion titleValue={'User'} collapsed={false} onChange={callback} 
                                                items={[{title:'dimych',value:1},{title:'volera',value:2}
                                                ,{title:'artem',value:3}]} onClick={onClickCallback}/>;
export const ModeChaging = ()=>{
  const [value,setValue]=useState<boolean>(true)
return<Accordion titleValue={'User'} collapsed={value} onChange={()=>setValue(!value)}
                 items={[{title:'dimych',value:1},{title:'volera',value:2},{title:'artem',value:3}]}
                 onClick={(value)=>{alert(`user id is:${value}`)}}/>;
}

