import React, { useState } from 'react';
import TableHeadItem from './TableParts/TableHeadItem';
import TableBodyItem from './TableParts/TableBodyItem';
import { reduxForm } from 'redux-form';
import c from './AddItem.module.css';

const AddItem = ({ setData, data, setIsSorted}) => {
    const [isClicked, setIsClicked] = useState(false);
    const onSubmit = (item) => {
        let cloneData = [item, ...data];
        setData(cloneData);
        setIsSorted({});
    }
    const showForm = () => {
        if (isClicked) {
            setIsClicked(false);
        } else setIsClicked(true);
    }
    return <div className={c.form__wrapper}>
        <button className={c.button} onClick={() => showForm()}>{isClicked
            ? 'Убрать форму'
            : 'Добавить'}</button>
        {isClicked && <ItemForm onSubmit={onSubmit} />}
    </div>
}

let ItemForm = ({ handleSubmit }) => {
    return <form className={c.form} onSubmit={handleSubmit}>
        <table className={c.table}>
            <TableHeadItem />
            <TableBodyItem />
        </table>
    </form>
}

ItemForm = reduxForm({
    form: 'item'
})(ItemForm);

export default AddItem;