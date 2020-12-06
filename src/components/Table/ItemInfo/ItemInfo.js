import React from 'react';
import c from '../Table.module.css';

const ItemInfo = ({ clickedItem }) => {
    return <div className={c.item__info}>
        <div>Выбран пользователь <b>{clickedItem.firstName} {clickedItem.lastName}</b></div>
        {clickedItem.description && <div><div>Описание:</div>
            <textarea value={clickedItem.description}></textarea>
        </div>}
            {clickedItem.address && <div><div>Адрес проживания:
            <b>{clickedItem.address.streetAddress}</b>
            </div>
            <div>Город: <b>{clickedItem.address.city}</b></div>
            <div>Провинция/штат: <b>{clickedItem.address.state}</b></div>
            <div>Индекс: <b>{clickedItem.address.zip}</b></div></div>}
    </div>
}

export default ItemInfo;