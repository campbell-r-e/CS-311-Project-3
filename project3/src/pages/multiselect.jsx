import React from "react";
import { useState } from "react";
import makeAnimated from "react-select/animated"; 
import {useColourOptions, staticColourOptions  } from '../data';
import Select from "react-select";

import { useEffect } from "react";

export default function AnimatedMulti({ onSelectionChange,selectedTags }) {
 

  const colourOptions = useColourOptions();
  const optionsToDisplay = colourOptions.length > 0 ? colourOptions : staticColourOptions;
  const animatedComponents = makeAnimated();
  const [internalValue, setInternalValue] = useState([]);


  useEffect(() => {
    if (selectedTags.length === 0) {
      setInternalValue([]); 
    }
  }, [selectedTags]);
  const handleSelect = (selected) => {
    
    const selectedValues = selected ? selected.map((option) => option.value) : [];
    setInternalValue(selected);
    onSelectionChange(selectedValues);
  

  };
  return (
    <Select
    value={internalValue}
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