import React, { useState } from 'react';

const TableGrid = ({ data, remove }) => {
const [checkedItems, setCheckedItems] = useState({});

const handleCheckboxChange = (index) => {
        setCheckedItems(prev => ({
        ...prev,
        [index]: !prev[index],
    }));
};

    return (
        <table>
        <tbody>
            {data.map((el, index) => (
            <tr key={index}>
                <td>
                <input
                    type="checkbox"
                    checked={!!checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                />
                </td>
                <td>{el.count}</td>
                <td>{el.item}</td>
                <td>
                <button onClick={() => remove(index)}>❌</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
);
};

export default TableGrid;
