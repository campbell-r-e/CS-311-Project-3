
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"
import App from '../../components/generatelogic';

//export let stepsfinal=0;



export default function Home() {
  const [value, setValue] = useState();
  const [showApp, setshowApp] = useState();
  const [steps, setSteps] = useState(0); 
  const [stepsfinal, setStepsFinal] = useState(0);
 
  
  const [error, setError] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [newtags, setnewtags] = useState([]);
  console.log(newtags); 

 

  const stepsgeneratelogic=()=>{
    const numSteps = parseInt(value, 10);
    if (isNaN(numSteps) || numSteps <= 4) {
      setError("You need to have more than 4 steps to generate a recipe");
      return false;
    }
     else{
      setSteps(numSteps);
      setStepsFinal(numSteps);

      setError("")
      return true;
     }
  }

  const taglogic=()=>{
    const tagarray= selectedTags;
    if(selectedTags.length<5){

      setError("You need to have at least five tags to generate a recipe but less than 10");
      return false;
     }
     else if(selectedTags.length>10){
      setError("You need to have at least five tags to generate a recipe but less than 10");
      return false;
     }
     else{
      setnewtags(tagarray);
      setError("");
      return true;
     }
  }
  const handleChange = (event) => {
    const result = event.target.value;
   
    if (/^\d*$/.test(result)) {
      setValue(result);
    }
  };
  const handleTagSelection = (tags) => {

    setSelectedTags(tags);
    
  };
  function button2(e) {
    e.preventDefault();
    const stepsValid = stepsgeneratelogic(); 
    const tagsValid = taglogic(); 
    
    if (stepsValid && tagsValid) {
      setSelectedTags([]); // Clear tags
      setnewtags([]); // Clear newtags
      setValue(''); // Clear the input
      setshowApp(true);
    }
  }
  
  
    return (
     <div>
      <div style={{ padding: '20px' }}>
      <h1>select 2-5 tags </h1>
      <AnimatedMulti 
      
      onSelectionChange={handleTagSelection}
     
      selectedTags={selectedTags}
      />
       
      
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
       
       {showApp && <App stepsfinal={stepsfinal} />}
      
     </div>
    
    );
  }
// based on https://bobbyhadz.com/blog/react-only-number-input