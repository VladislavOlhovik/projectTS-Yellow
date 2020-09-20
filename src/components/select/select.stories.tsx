import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './select';

export default {
  title: 'Select',
  component: Select,
};
export const WithValue = () =>{
  const[value,setValue]=useState(2)
  return<>
    <Select onChange={setValue}
      value={value}
      items={[
        { title: 'Minsk', value: 1 },
        { title: 'Moscow', value: 2 },
        { title: 'Kiev', value: 3 }
      ]}/>
  </>
}
export const WithoutValue = () =>{
  const[value,setValue]=useState(null)
  return<>
    <Select onChange={setValue}
      value={value}
      items={[
        { title: 'Minsk', value: 1 },
        { title: 'Moscow', value: 2 },
        { title: 'Kiev', value: 3 }
      ]}/>
  </>
}

