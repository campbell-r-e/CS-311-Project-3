

import React, { useEffect, useState } from "react";

export interface ColourOption {
  value: string;
   label: string;
 
  
 }
 export interface tags{
  name:string;
  
 }
 
 async function fetchColourOptions(): Promise<ColourOption[]> {
   try {
     const response = await fetch('/api/options');
     if (!response.ok) {
       throw new Error("Network response was not ok");
     }
     const data: tags[] = await response.json();

  
     return data.map(tag => ({
       value: tag.name, 
       label: tag.name,
      
   }));
   
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
