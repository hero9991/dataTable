import c from './FormWrappers.module.css';

export const Input = ({ input, meta, ...props }) => {
    return <div>
        <input {...props} {...input} {...meta} className={meta.error && meta.touched && c.input__error}></input>
        {meta.touched && meta.error && <div className={c.text__error}>{meta.error}</div>}
    </div>
}

export const MainInput = (props) => {
    return <tbody className={c.table__body}>
            <tr>
            {Object.keys(props).map(item => props[item].input && <th>
                    <Input input={props[item].input} meta={props[item].meta} props={props} />
                </th> )}
            </tr>
            {!props.id.meta.error && !props.firstName.meta.error
            && !props.lastName.meta.error && !props.email.meta.error
            && !props.phone.meta.error
            && <button className={c.button}>Добавить в таблицу</button>}
        </tbody>
}