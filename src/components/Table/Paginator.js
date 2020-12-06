import React, { useState } from 'react';
import { fillInPages } from '../utils/filInPages';
import c from './Table.module.css';


const Paginator = ({data, activeRowsCount, setActivePage, activePage, portionSize}) => {
    const [portionState, setPortionState] = useState(1);
    const pages = [];
    fillInPages(data, activeRowsCount, pages);
    const portionCount = Math.ceil(pages.length / portionSize);
    let leftBorder = portionState * portionSize + 1 - portionSize;
    let rightBorder = portionState * portionSize;
    return <div>
        {portionState > 1 && <button onClick={() => setPortionState(portionState - 1)}>{`<<<`}</button>}
        {pages.length > 1 && pages.filter((page) => page >= leftBorder && page <= rightBorder).map(page => {
            return <span className={c.page_num + ' ' + (page===activePage && c.page__active)} onClick={
                () => setActivePage(page)
            } key={page}>{page}</span>
        })}
        {portionState < portionCount  && <button onClick={() => setPortionState(portionState + 1)}>{`>>>`}</button>}
    </div>
}

export default Paginator;