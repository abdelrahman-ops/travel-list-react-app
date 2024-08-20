import React, { useState } from 'react';

const Item = ({ item, onDeleteItem, onToggleItem }) => {

    return (
        <li>
            <input 
                type="checkbox" 
                checked={item.done} 
                value={item.packed}
                onChange={() => onToggleItem(item.id)} />
                <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                    {item.quantity} {item.description}
                </span>
                <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
};

export default Item;
