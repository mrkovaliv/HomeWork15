import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../ducks/jobPage';
import styles from './JobForm.module.css';


const propTypes = {
    item: PropTypes.object
}

const JobForm = ({item}) => {
    const { nameCompany, position, dataStartJob, dataEndJob, id } = item;
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        dispatch(changeValue(id, fieldName, fieldValue));
    }
    
    return <form className={styles["job-form"]} >
        <label>Назва компанії</label>
        <input type="text" name='nameCompany' value={nameCompany} onChange={handleChange} />
        <label>Посада</label>
        <input type="text" name='position' value={position} onChange={handleChange} /> 
        <label>Дата початку роботи</label>
        <input type="text" name='dataStartJob' value={dataStartJob} onChange={handleChange} /> 
        <label>Дата закінчення роботи</label>
        <input type="text" name='dataEndJob' value={dataEndJob} onChange={handleChange} />
    </form>;
    
};

JobForm.propTypes = propTypes;

export default JobForm;