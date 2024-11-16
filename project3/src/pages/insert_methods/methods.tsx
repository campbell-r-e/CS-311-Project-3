import { useState } from 'react';



export default function Methods() {
  const [methods, setmethods] = useState("");

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`input accepted`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a Cooking Method:
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


// based on example from https://www.w3schools.com/react/react_forms.asp