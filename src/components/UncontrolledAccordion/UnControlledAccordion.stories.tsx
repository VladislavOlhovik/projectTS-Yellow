import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import UnControlledAccordion from './UnControlledaccordion';

export default {
  title: 'UnControlledAccordion',
  component: UnControlledAccordion,
};
const callback = action('accordion mode change event fired')

export const ModeChaging = ()=>{
return<UnControlledAccordion titleValue={'User'}/>;
}

