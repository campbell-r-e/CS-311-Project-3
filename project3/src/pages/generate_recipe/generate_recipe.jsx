
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"




export default function Home() {
  const [value, setValue] = useState();
  const [update, setupdated] = useState();
  const [error, setError] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  console.log(selectedTags);


  const stepsgeneratelogic=()=>{
    if(update>4){

     setupdated();
     }
     else{
      setupdated();
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
  const handleChange = (event) => {
    const result = event.target.value;
   

    setValue(result);
  };
  const handleTagSelection = (tags) => {

    setSelectedTags(tags);
    taglogic();
  };
  function button2(e) {
    e.preventDefault();
    setupdated(value);
    stepsgeneratelogic();
  }
  
  
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
     <button onClick={button2}>
  submit 
     </button>

       <div>  {error && <div className="datastate">{error}</div>}</div>
     </div>
    
    );
  }
// based on https://bobbyhadz.com/blog/react-only-number-input