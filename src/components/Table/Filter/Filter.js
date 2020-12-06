import React from 'react';
import { reduxForm, Field } from 'redux-form';
import c from './Filter.module.css';

let Filter = ({handleSubmit}) => {
    return <form className={c.form} onSubmit={handleSubmit}>
        <Field name="filter" component="input" type="text" />
        <button >Поиск</button>
    </form>
}

export default reduxForm({
    form: 'filter'
})(Filter);
