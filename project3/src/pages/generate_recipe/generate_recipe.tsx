
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"

export default function Home() {
  const [value, setValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  console.log(selectedTags);


  const handleChange = (event: { target: { value: string; }; }) => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };
  const handleTagSelection = (tags:string[]) => {
    setSelectedTags(tags);
  };
    return (
     <div>
      <div style={{ padding: '20px' }}>
      <h1>select 2-5 tags </h1>
      <AnimatedMulti onSelectionChange={handleTagSelection}/>
       
      
    </div>

    <div>Enter how many steps you want in the recipe</div>
      <input
        type="text"
        placeholder="Enter number of Steps"
        value={value}
        onChange={handleChange}
      />
    
     </div>
    
    );
  }
// based on https://bobbyhadz.com/blog/react-only-number-input