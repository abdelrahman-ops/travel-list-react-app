// App.js
import React, { useState } from 'react';
import Logo from "./components/Logo";
import Form from "./components/Form";
import PList from "./components/PList";
import Stats from "./components/Stats";
// import './App.css';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const toggleItem = (index) => {
    setItems((items) =>
      items.map((item) =>
        item.index === index ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems = {addItem} />
      <PList 
        items = {items}
        onRemoveItem = {removeItem}
        onToggleItem = {toggleItem}
        onClearList = {clearList}
      />
      <Stats items = {items} />
    </div>
  );
}

export default App;
