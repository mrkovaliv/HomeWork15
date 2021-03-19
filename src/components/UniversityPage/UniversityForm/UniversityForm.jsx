import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../ducks/universityPage';
import styles from './UniversityForm.module.css';


const propTypes = {
    item: PropTypes.object
}

const UniversityForm = ({ item }) => {
    const { nameUniversity, specialty, dataStartUniversity, dataEndUniversity, id } = item;
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        dispatch(changeValue(id, fieldName, fieldValue));
    }

    return <form className={styles["main-form"]} >
        <label>Назва</label>
        <input type="text" name='nameUniversity' value={nameUniversity} onChange={handleChange} />
        <label>Спеціальність</label>
        <input type="text" name='specialty' value={specialty} onChange={handleChange} />
        <label>Місяць і рік початку навчання</label>
        <input type="text" name='dataStartUniversity' value={dataStartUniversity} onChange={handleChange} />
        <label>Місяць і рік закінчення навчання</label>
        <input type="text" name='dataEndUniversity' value={dataEndUniversity} onChange={handleChange} />
    </form>;

};

UniversityForm.propTypes = propTypes;

export default UniversityForm;