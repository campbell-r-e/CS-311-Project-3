import { useState } from 'react';



export default function Methods() {
  const [methods, setmethods] = useState("");

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`input accepted`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Enter a cooking step as a template string in this format: &quot;beat [ingredient] for 10 minutes.&quot:
        <input 
          type="text" 
          value={methods}
          onChange={(e) => setmethods(e.target.value)}
        />
      </label>

    
      
      <input type="submit" />
    </form>
  )
  
}