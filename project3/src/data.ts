import { useEffect, useState } from "react";

export interface ColourOption {
    readonly name: string;
    readonly label: string;
  
   
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
        name: tag.name, 
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
  


  
  export const staticColourOptions: readonly ColourOption[] =  [
    { name: 'ocean',label:'ocean'},
 
  
  
  ];
  

  // modified from https://codesandbox.io/p/sandbox/2tnw6w?file=%2Fdocs%2Fdata.ts%3A15%2C31
  