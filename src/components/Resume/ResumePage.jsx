import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './ResumePage.module.css';


const ResumePage = () => {
    const history = useHistory();
    const data = useSelector((state)=> state);
    const { personForm, universityPage, jobPage } = data;
    const { formData } = personForm;
    useEffect(() => {
        for(const item of jobPage.jobs) {
            for (const i in item) {
                if (item[i] === '') {
                    history.push(`/jobs`);
                }
            }
        }
    }, [])

    
    
    const prevPage = () => {
        history.push('/jobs');
    }

    return <div className={styles["resume"]} >
        <div className={styles["title-main"]}>Резюме</div>
        <div className={styles["name-info"]}>
            <div className={styles["name"]}>{formData.firstName}</div>
            <div className={styles["surname"]}>{formData.lastName}</div>
        </div>
        <div>Посада: </div>
        <div className={styles["position"]}>{formData.position}</div>
        <div>Контактна інформація: </div>
        <div className={styles["phone"]}>{formData.phone}</div>
        <div className={styles["email"]}>{formData.email}</div>
        <div className={styles["lists"]}>
            <div>
                <div className={styles["title"]}>Навчальні заклади: </div>
                <ul className={styles["list-university"]}>
                    {universityPage.universities.map((item, index) =>
                        <li key={index} className={styles["list-item"]}>
                            <div className={styles["list-university"]}>Назва: <span>{item.nameUniversity}</span></div>
                            <div className={styles["list-university"]}>Спеціальність: <span>{item.specialty}</span></div>
                            <div className={styles["list-university"]}>Дата вступу: <span>{item.dataStartUniversity}</span></div>
                            <div className={styles["list-university"]}>Дата закінчення: <span>{item.dataEndUniversity}</span></div>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <div className={styles["title"]}>Попередні місця роботи: </div>
                <ul className={styles["list-job"]} >
                    {jobPage.jobs.map((item, index) =>
                        <li key={index} className={styles["list-item"]}>
                            <div className={styles["list-university"]}>Назва компанії: <span>{item.nameCompany}</span></div>
                            <div className={styles["list-university"]}>Посада: <span>{item.position}</span></div>
                            <div className={styles["list-university"]}>Дата початку роботи: <span>{item.dataStartJob}</span></div>
                            <div className={styles["list-university"]}>Дата закінчення роботи: <span>{item.dataEndJob}</span></div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        <button onClick={prevPage} className={styles["prev"]}>Попередня сторінка</button>
    </div>;
};


export default ResumePage;