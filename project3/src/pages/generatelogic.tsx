

import React, { useEffect, useState } from "react";
import steps from './generate_recipe/generate_recipe'
export interface ColourOption {
  name: string;
  
 
  
 }
 export interface tags{
  name:string;
  
 }
 const [descriptions, setDescriptions] = useState<string[]>([]);
 
 async function fetchColourOptions(): Promise<ColourOption[]> {
  try {
    const res = await fetch("/api/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({step:steps}), // Send data to server
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from server");
    }

    const data = await res.json(); // Receive response from server
    setDescriptions(data.name); // Update state with server response
  } catch (error) {
     console.error("Failed to fetch questions:", error);
     return [];
    
   }
 }
 export function useColourOptions() {
   const [colourOptions, setColourOptions] = useState<ColourOption[]>([]);

   useEffect(() => {
     async function loadOptions() {
       const options = await fetchColourOptions();
       setColourOptions(options || []);
     }
 
     loadOptions();
   }, []);
 
   return colourOptions;
 }
 


const App = () => {
  
  

  return (
  <div></div>
    
  
  );
}

export default App;
