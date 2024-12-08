

import React, {useEffect, useState } from "react";






const App = ({ stepsfinal }) => {
  const [descriptions, setDescriptions] = useState([]);
  console.log("Value of steps:", stepsfinal); // Check if the value of 'steps' is correct

  async function fetchmethods(){
   try {
     const res = await fetch("/api/findmethod", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({step:stepsfinal}), // Send data to server
     });
 
     if (!res.ok) {
       throw new Error("Failed to fetch data from server");
     }
 
     const data  = await res.json(); // Receive response from server
     setDescriptions(data.methods); // Update state with server response
   } catch (error) {
      console.error("Failed to fetch questions:", error);
      return [];
     
    }
  }
 
  
  useEffect(() => {
   fetchmethods();
 }, []);



 
  return (
  <div>
   <h1>Cooking methods</h1>
   <div>

   </div>
   <ul>
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>

      <h1>Ingredients</h1>


  </div>
    
  
  );
}

export default App;
