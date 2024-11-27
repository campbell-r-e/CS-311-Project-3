import { useState } from 'react';


export default function MyForm() {
  const [nameError, setNameError] = useState("");

const [method, setmethod ] = useState("");
 

  

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNameValid = name_validator();

  
    if (isNameValid) {
      setmethod("");
    
      // Proceed with form submission
      console.log("Form submitted:");
    }
    else{
      console.log("error")
    }
    
   
  }
  
  const name_validator = () => {
     
     if(method.length<2){
       setNameError("Cooking method is to short needs minimum of 2 characters");
  
        
        return false;
     }
     else if(method.length>200){
      setNameError("Cooking Method is limited to 200 characters")
  
      return false;
     }
     const regex = /^[a-zA-Z\s'-]+$/;

     if(!regex.test(method)){
      setNameError("Cooking methods can only include letters, spaces, hyphens, and apostrophes.");
   
       return false; 

     }
     else{
      setNameError("")
      return true;
     }
     
    

  };













  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a cooking method :
        <input 
          type="text" 
          value={method}
          onChange={(e) => setmethod(e.target.value)}
          
        />
      </label>
      {nameError && <div className="error-message">{nameError}</div>}


    
        
      
      <input type="submit" />
     
    </form>
    
  )
  
};


// based on example from https://www.w3schools.com/react/react_forms.asp