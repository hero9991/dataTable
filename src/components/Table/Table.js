import React, { useState, useEffect } from 'react';
import c from './Table.module.css';
import TableBody from './TableParts/TableBody';
import TableHead from './TableParts/TableHead';
import ItemInfo from './ItemInfo/ItemInfo';
import AddItem from './AddItem/AddItem';
import Filter from './Filter/Filter';
import Paginator from './Paginator';
import { NavLink } from 'react-router-dom';


const Table = ({ data, activeRowsCount, setData, portionSize }) => {

    const [activePage, setActivePage] = useState(1);
    const [activeData, setActiveData] = useState([]);
    const [cloneData, setCloneData] = useState([]);
    const [isSorted, setIsSorted] = useState({});
    const [clickedItem, setClickedItem] = useState({});

    const index = (activePage - 1) * activeRowsCount;
    useEffect(() => {
        const activeDataClone = [];
        for (let i = index; i < index + activeRowsCount; i++) {
            if (data[i]) activeDataClone.push(data[i]);
        }
        setActiveData(activeDataClone);
        if (data.length > cloneData.length) setCloneData(data);
    }, [index, activeRowsCount, data, cloneData.length])

    const sortData = (title) => {
        let dataClone = [...data];
        const isSortedClone = {};
        if (!isSorted[title]) {
            dataClone.sort((a, b) => a[title] > b[title] ? 1 : -1);
            isSortedClone[title] = true;
        } else {
            dataClone.sort((a, b) => a[title] < b[title] ? 1 : -1);
            isSortedClone[title] = false;
        }
        setData(dataClone);
        setIsSorted(isSortedClone);
    }

    const onSubmit = (value) => {
        if (!value.filter) {
            setData(cloneData);
            return;
        }
        let activeDataClone = cloneData.filter(item => {
            for (let key in item) {
                if (('' + item[key]).includes(value.filter)) return true;
            }
            return null;
        })
        setData(activeDataClone);
        setActivePage(1);
    }

    return <div className={c.table__wrapper}>
        <div className={c.top}>
            <NavLink className={c.link} to="/Nav"> {'<--'} Вернуться к выбору</NavLink>
            <Filter onSubmit={onSubmit} />
        </div>
        <AddItem setData={setData} data={data} setIsSorted={setIsSorted} />
        <Paginator data={data} activeRowsCount={activeRowsCount}
            setActivePage={setActivePage} activePage={activePage} portionSize={portionSize} />
        {data.length > 0 ? <table className={c.table}>
            <TableHead isSorted={isSorted} sortData={sortData} />
            <TableBody activeData={activeData} setClickedItem={setClickedItem} clickedItem={clickedItem}/>
        </table> : 'Добавьте или загрузите данные...'}
        {clickedItem.firstName && <ItemInfo clickedItem={clickedItem} />}
    </div>
}






export default Table;