import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { changeValue } from '../../ducks/personForm';
import styles from './PersonForm.module.css';


const propTypes = {
    values: PropTypes.object
}

const PersonForm = ({ values }) => {
    const { firstName, lastName, position, phone, email } = values;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        dispatch(changeValue(fieldName, fieldValue));
    }
    const submit = (event) => {
        event.preventDefault();
        if (firstName !== '' && lastName !== '' && position !== '' && phone !== '' && email !== '') {
            history.push(`/universities`);
        }
    }

    return <form className={styles["main-form"]} onSubmit={submit}>
        <label>Ім'я</label>
        <input type="text" name='firstName' value={firstName} onChange={handleChange} />
        <label>Прізвище</label>
        <input type="text" name='lastName' value={lastName} onChange={handleChange} />
        <label>Посада</label>
        <input type="text" name='position' value={position} onChange={handleChange} />
        <label>Телефон</label>
        <input type="text" name='phone' value={phone} onChange={handleChange} />
        <label>Електронна пошта</label>
        <input type="text" name='email' value={email} onChange={handleChange} />
        <input className={styles["main-btn"]} type="submit" value="Наступна сторінка" />

    </form>;
};

PersonForm.propTypes = propTypes;

export default PersonForm;