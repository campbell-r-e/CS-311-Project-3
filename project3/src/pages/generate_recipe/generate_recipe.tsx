
import React, { useState } from "react";
import AnimatedMulti from "../multiselect"

export default function Home() {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: string; }; }) => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };
    return (
     <div>
      <div style={{ padding: '20px' }}>
      <h1>select 2-5 tags </h1>
      <AnimatedMulti />
    </div>

    <div>Enter how many steps you want in the recipe</div>
      <input
        type="text"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
    
     </div>
    
    );
  }
// based on https://bobbyhadz.com/blog/react-only-number-input