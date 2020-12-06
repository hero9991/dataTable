import React from 'react';
import c from '../Table.module.css'

const TableBody = ({ activeData, setClickedItem, clickedItem }) => {
    return activeData.map((item, index) => <tbody key={index}>
        <tr className={clickedItem.description === item.description && 
            clickedItem.id === item.id &&
            clickedItem.firstName === item.firstName && c.clicked__item} 
            onClick={() => setClickedItem(item)}>
            <th>{item.id}</th>
            <th>{item.firstName}</th>
            <th>{item.lastName}</th>
            <th>{item.email}</th>
            <th>{item.phone}</th>
        </tr>
    </tbody>)
}

export default TableBody;