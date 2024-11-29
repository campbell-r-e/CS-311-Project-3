import { useState } from 'react';



export default function steps() {
  const [steps, setsteps] = useState("");

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updates();
  }
  async function updates(){

 
    
 
    try {
      const response = await fetch("/api/insertcookingsteps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          description:steps,
          

        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update");
      }
  
      const data = await response.json();
      console.log("Update response:", data);
      setsteps("")
      
    } catch (error) {
      console.error("Error updating amount understood:", error);
    }}

  return (
    <form onSubmit={handleSubmit}>
      <label> Enter a cooking step as a template string in this format: &quot;beat [ingredient] for 10 minutes.&quot:
        <input 
          type="text" 
          value={steps}
          onChange={(e) => setsteps(e.target.value)}
        />
      </label>

    
      
      <input type="submit" />
    </form>
  )
  
}