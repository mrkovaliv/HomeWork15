import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addedJob } from '../../ducks/jobPage';
import JobForm from './JobForm/JobForm'
import styles from './JobPage.module.css';

const propTypes = {
    jobs: PropTypes.array,
    prevData: PropTypes.array
}

const JobPage = ({ jobs, prevData }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        for (const item of prevData) {
            for (const i in item) {
                if (item[i] === '') {
                    history.push(`/universities`);
                }
            }
        }

    }, [])

    const prevPage = () => {
        history.push(`/universities`);
    }

    const nextPage = () => {
        let isEmptyField = false;
        for (const job of jobs) {
            const { nameCompany, position, dataStartJob, dataEndJob } = job;
            if (nameCompany === '' || position === '' || dataStartJob === '' || dataEndJob === '') {
                isEmptyField = true;
                break;
            }
        }
        if (!isEmptyField) {
            history.push(`/resume`);
        }
    }

    const jobAdd = () => {
        dispatch(addedJob(jobs.length));
    }


    return <div className={styles["job"]} >
        <div className={styles["title"]}>Список попередніх місць роботи</div>
        <ul>
            {jobs.map((item, index) => <JobForm key={index} item={item} />)}
        </ul>
        <button onClick={jobAdd} className={styles["job-add"]}>Додоати</button>
        <div className={styles["buttons-nav"]}>
            <button onClick={prevPage} className={styles["prev"]}>Попередня сторінка</button>
            <button onClick={nextPage} className={styles["next"]}>Наступна сторінка</button>
        </div>

    </div>;
};

JobPage.propTypes = propTypes;

export default JobPage;