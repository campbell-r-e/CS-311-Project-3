import { useState } from 'react';
const [nameError, setNameError] = useState("");
const [tagError, setTagError] = useState("");
const [ingredients, setingredients ] = useState("");
 
  const [tag, settag] = useState("");

export default function MyForm() {
  

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name_validator() && tag_validator()) {
      // Proceed with form submission
      console.log("Form submitted:");
    }
    else{
      console.log("error")
    }
    
   
  }
  const name_validator = () => {
     
     if(ingredients.length<2){
       setNameError("Ingredient name is to short needs minimum of 2 characters");
       setingredients("");
        
        return false;
     }
     if(ingredients.length>20){
      setNameError("Ingredients are limited to 20 characters")
      setingredients("")
      return false;
     }
     const regex = /[^a-zA-Z0-9\s]/;
   
     if(regex.test(ingredients) == true){
       setNameError("Ingredients can have only spaces and letters with no numbers or special chars");
       setingredients("")
       return false; 

     }
     setNameError("")
      return true;
    

  };











const tag_validator = () => {
   
   if(tag.length<2){
     setTagError("tag name is to short needs minimum of 2 characters");
     setTagError("");
      
      return false;
   }
   if(tag.length>10){
    setTagError("Ingredients are limited to 10 characters")
    setTagError("")
    return false;
   }
   const regex = /[^a-zA-Z0-9\s]/;
 
   if(regex.test(tag) == true){
     setTagError("Tags can have only spaces and letters with no numbers or special chars");
     setTagError("")
     return false; 

   }
   setTagError("")
    return true;
  

};

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter an ingredient:
        <input 
          type="text" 
          value={ingredients}
          onChange={(e) => setingredients(e.target.value)}
          
        />
      </label>
      {nameError && <div className="error-message">{nameError}</div>}

      <br></br>
      <label>Enter a tag:
        <input 
          type="text" 
          value={tag}
          onChange={(e) => settag(e.target.value)}
        />
      </label>
      <input type="submit" />
      {tagError && <div className="error-message">{tagError}</div>}
    </form>
  )
  
};


// based on example from https://www.w3schools.com/react/react_forms.asp