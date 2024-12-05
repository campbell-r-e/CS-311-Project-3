import React from "react";
import makeAnimated from "react-select/animated"; // Import makeAnimated
import {useColourOptions, staticColourOptions  } from '../data';
import Select from "react-select";



export default function AnimatedMulti({ onSelectionChange }) {
 

  const colourOptions = useColourOptions();
  const optionsToDisplay = colourOptions.length > 0 ? colourOptions : staticColourOptions;
  const animatedComponents = makeAnimated();
  const handleSelect = (selected) => {
    
    const selectedValues = selected ? selected.map((option) => option.value) : [];
    onSelectionChange(selectedValues);
  

  };
  return (
    <Select
    
    onChange={handleSelect}
    
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti
    options={optionsToDisplay}
    placeholder="Select options..."
    />


    


  );
}
 // modified from https://codesandbox.io/p/sandbox/2tnw6w?file=%2Fdocs%2Fdata.ts%3A15%2C31