import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addedUniversity } from '../../ducks/universityPage';
import UniversityForm from './UniversityForm/UniversityForm'
import styles from './UniversityPage.module.css';


const propTypes = {
    universities: PropTypes.array,
    prevData: PropTypes.object
}

const UniversityPage = ({ universities, prevData }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        for (const i in prevData) {
            if (prevData[i] === '') {
                history.push(`/`);
            }
        }
    }, []);

    const nextPage = () => {
        let isEmptyField = false;
        for (const university of universities) {
            if (
                university.nameUniversity === "" ||
                university.specialty === "" ||
                university.dataStartUniversity === "" ||
                university.dataEndUniversity === ""
            ) {
                isEmptyField = true;
                break;
            }
        }
        if (!isEmptyField) {
            history.push(`/jobs`);
        }

    }
    const prevPage = () => {
        history.push(`/`);
    }
    const universityAdd = () => {
        dispatch(addedUniversity(universities.length));
    }

    return <div className={styles["university"]} >
        <div className={styles["title"]}>Список закінчених навчальних закладів</div>
        <ul>
            {universities.map((item, index) => <UniversityForm key={index} item={item} />)}
        </ul>
        <button onClick={universityAdd} className={styles["university-add"]}>Додоати</button>
        <div className={styles["buttons-nav"]}>
            <button onClick={prevPage} className={styles["prev"]}>Попередня сторінка</button>
            <button onClick={nextPage} className={styles["next"]}>Наступна сторінка</button>
        </div>
    </div>;
};

UniversityPage.propTypes = propTypes;

export default UniversityPage;