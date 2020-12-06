import React from 'react'
import c from '../Table.module.css'

const TableHead = ({isSorted, sortData}) => {
    return <thead>
        <tr>
            <th className={c.column__title + ' ' + (isSorted['id'] ? c.column__sorted : c.column)}
                onClick={() => sortData("id")}>id</th>
            <th className={c.column__title + ' ' + (isSorted['firstName'] ? c.column__sorted : c.column)}
                onClick={() => sortData("firstName")}>firstname</th>
            <th className={c.column__title + ' ' + (isSorted['lastName'] ? c.column__sorted : c.column)}
                onClick={() => sortData("lastName")}>lastname</th>
            <th className={c.column__title + ' ' + (isSorted['email'] ? c.column__sorted : c.column)}
                onClick={() => sortData("email")}>email</th>
            <th className={c.column__title + ' ' + (isSorted['phone'] ? c.column__sorted : c.column)}
                onClick={() => sortData("phone")}>phone</th>
        </tr>
    </thead>
}

export default TableHead;