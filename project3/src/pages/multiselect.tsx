import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      
      isMulti
      options={colourOptions}
    />
  );
}
 // modified from https://codesandbox.io/p/sandbox/2tnw6w?file=%2Fdocs%2Fdata.ts%3A15%2C31