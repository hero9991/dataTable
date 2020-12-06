import React from 'react';
import { Fields } from 'redux-form';
import { required, forNum } from '../../../utils/validators';
import { MainInput } from '../../../FormWrappers/FormWrappers';

const TableBodyItem = () => {
    return <Fields names={["id", "firstName", "lastName", "email", "phone"]}
        component={MainInput} type={{ email: () => "email" }}
        validate={{
            id: forNum,
            firstName: required,
            lastName: required,
            email: required,
            phone: required
        }} />
}

export default TableBodyItem;