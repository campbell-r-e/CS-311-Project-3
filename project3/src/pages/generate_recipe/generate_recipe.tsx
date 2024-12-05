
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"

function stepsgeneratelogic(value:string){
  if(parseInt(value)>4){
   console.log("good")
  }
  else{
    console.log("Handle exception")
  }

}
function tag_logic(selectedTags:string[]){
  if(selectedTags.length-1>4){
    console.log("good")
   }
   else{
     console.log("Handle exception")
   }
 
}

export default function Home() {
  const [value, setValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  console.log(selectedTags);


  const handleChange = (event: { target: { value: string; }; }) => {
    const result = event.target.value.replace(/\D/g, '');
    stepsgeneratelogic(value)

    setValue(result);
  };
  const handleTagSelection = (tags:string[]) => {

    setSelectedTags(tags);
    tag_logic(selectedTags);
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