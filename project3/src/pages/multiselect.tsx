import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useColourOptions, staticColourOptions  } from '../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  const colourOptions = useColourOptions();

  const optionsToDisplay = colourOptions.length > 0 ? colourOptions : staticColourOptions;
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      
      isMulti
      options={optionsToDisplay}
    />
  );
}
 // modified from https://codesandbox.io/p/sandbox/2tnw6w?file=%2Fdocs%2Fdata.ts%3A15%2C31