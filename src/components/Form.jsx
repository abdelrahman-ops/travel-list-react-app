import React, { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);
  
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, count, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setCount(1);
  }


  return (
    <form className='add-form'  onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      
      <select value={count} onChange={(e) => setCount(Number(e.target.value))} >
        {[...Array(20).keys()].map(num => (   <option key={num} value={num + 1}>{num + 1} </option>    ))}
      </select>

      <input 
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        id="in"
        placeholder="Item..."
      />
      <button>ADD</button>  
    </form>
    
  );
};
