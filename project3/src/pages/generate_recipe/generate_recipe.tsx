
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"




export default function Home() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  console.log(selectedTags);

  const stepsgeneratelogic=()=>{
    if(parseInt(value)>4){

     setValue("");
     }
     else{
      setValue("");
      setError("You need to have more than 4 steps to generate a recipe")
     }
  }

  const taglogic=()=>{
    if(selectedTags.length-1>=5){

     setSelectedTags([]);
     }
     else{
      setSelectedTags([]);
      setError("You need to have at least five tags to generate a recipe")
     }
  }
  const handleChange = (event: { target: { value: string; }; }) => {
    const result = event.target.value.replace(/\D/g, '');
    stepsgeneratelogic()

    setValue(result);
  };
  const handleTagSelection = (tags:string[]) => {

    setSelectedTags(tags);
    taglogic();
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
       <div>  {error && <div className="datastate">{error}</div>}</div>
     </div>
    
    );
  }
// based on https://bobbyhadz.com/blog/react-only-number-input