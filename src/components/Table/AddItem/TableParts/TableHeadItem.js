import React from 'react'
import c from '../../Table.module.css'

const TableHeadItem = () => {
    return <thead>
        <tr>
            <th className={c.column__title}>id</th>
            <th className={c.column__title}>firstname</th>
            <th className={c.column__title}>lastname</th>
            <th className={c.column__title}>email</th>
            <th className={c.column__title}>phone</th>
        </tr>
    </thead>
}

export default TableHeadItem;