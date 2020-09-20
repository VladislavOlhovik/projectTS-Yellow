import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};
const callback = action('on or off clicked')
export const OnModule = ()=><OnOff on={true} setOn={callback}/>;
export const OffModule = ()=><OnOff on={false} setOn={callback}/>;
export const ModeChaging = ()=>{
  const [value,setValue]=useState<boolean>(true)
return<OnOff on={value} setOn={setValue}/>;
}

