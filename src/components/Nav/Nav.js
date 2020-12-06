import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Nav.module.css';


const Nav = ({ requestBigData, requestSmallData, isLoading }) => {

    const getData = (requestData) => {
        if (isLoading) return;
        requestData();
    }

    return <div className={c.nav__wrapper + ' ' + (isLoading && c.nav__loading)}>
        <h2>Набор данных</h2>
        <NavLink className={c.nav} to="/Table" onClick={() => getData(requestSmallData)}>small</NavLink>
        <NavLink className={c.nav} to="/Table" onClick={() => getData(requestBigData)}>big</NavLink>
    </div>
}

export default Nav;