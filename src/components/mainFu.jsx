import React, { useState } from 'react';

function Fu({ addItem }) {
  const [item, setItem] = useState("");
  const [count, setCount] = useState(1);

  const handleAddItem = () => {
    addItem(item, count);
    setItem("");
  };

  return (
    <div className='main'>
      <label htmlFor="in">What do you need for your 😍 trip?</label>
      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        {[...Array(20).keys()].map(num => (
          <option key={num} value={num + 1}>{num + 1}</option>
        ))}
      </select>
      <input 
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} 
        id="in"
        placeholder="Item..."
      />
      <button onClick={handleAddItem}>ADD</button>  
    </div>
  );
};

export default Fu;
