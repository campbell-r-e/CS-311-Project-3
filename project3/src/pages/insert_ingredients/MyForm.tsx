import { useState } from 'react';


export default function MyForm() {
  const [nameError, setNameError] = useState("");
const [tagError, setTagError] = useState("");
const [ingredients, setingredients ] = useState("");
 
  const [tag, settag] = useState("");
  const [datastate,setdataste]=useState("")
 

  async function updates() {
    try {
      const response = await fetch("/api/insertingredient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tagname: tag.toUpperCase(),
          ingredientname: ingredients.toUpperCase(),
        }),
      });
  
      const contentType = response.headers.get("Content-Type");
  
      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Error Response:", errorData);
          setdataste(errorData.duplicateissue || errorData.error || "An unexpected error occurred.");
        } else {
          const errorText = await response.text();
          console.error("Unexpected Response Format:", errorText);
          setdataste("Both Tag and Ingredient are all ready in database.");
        }
        return; 
      }
  
      const data = await response.json();
      console.log("Success Response:", data);
      setdataste("Ingredient and tag added successfully!");
      setingredients("");
      settag("");
    } catch (error) {
      console.error("Error in updates function:", error);
      setdataste("Failed to update due to a network or server error.");
    }
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNameValid = name_validator();
const isTagValid = tag_validator();
  
    if (isNameValid&&isTagValid) {
      setingredients("");
      settag("");
      updates();
     
      console.log("Form submitted:");

    }
    else{
      console.log("error")
    }
    
   
  }
  
  const name_validator = () => {
     
     if(ingredients.length<2){
       setNameError("Ingredient name is to short needs minimum of 2 characters");
  
        
        return false;
     }
     else if(ingredients.length>20){
      setNameError("Ingredients are limited to 20 characters")
  
      return false;
     }
     const regex = /^[a-zA-Z\s]+$/;
     if(!regex.test(ingredients)){
       setNameError("Ingredients can have only spaces and letters with no numbers or special chars");
   
       return false; 

     }
     else{
      setNameError("")
      return true;
     }
     
    

  };











const tag_validator = () => {
 
  if(tag==""){
    setTagError("Tag can not be empty.");
    
     
     return false;
  }
   
   if(tag.length<2){
     setTagError("tag name is to short needs minimum of 2 characters");
   
      
      return false;
   }
  
   if(tag.length>10){
    setTagError("Ingredients are limited to 10 characters")
    
    return false;
   }
   const regex = /^[a-zA-Z\s]+$/;
 
   if(!regex.test(tag)){
     setTagError("Tags can have only spaces and letters with no numbers or special chars");
     
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
    <div>  {datastate && <div className="datastate">{datastate}</div>}</div>
    </form>

    
  )
  
};


// based on example from https://www.w3schools.com/react/react_forms.asp