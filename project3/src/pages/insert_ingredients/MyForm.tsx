import { useState } from 'react';



export default function MyForm() {
  const [ingredients, setingredients ] = useState("");
  const [tag, settag] = useState("");

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`input accepted`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter an ingredient:
        <input 
          type="text" 
          value={ingredients}
          onChange={(e) => setingredients(e.target.value)}
        />
      </label>

      <br></br>
      <label>Enter a tag:
        <input 
          type="text" 
          value={tag}
          onChange={(e) => settag(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
  
}


// based on example from https://www.w3schools.com/react/react_forms.asp