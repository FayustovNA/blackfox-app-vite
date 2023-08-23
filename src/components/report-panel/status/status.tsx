import styles from './status.module.css';
import React from 'react';
import statusDone from '../../../images/statusDone.svg'
import statusNot from '../../../images/statusNot.svg'

interface StatusProps {
    isDone?: boolean;
}

export const StatusReport: React.FC<StatusProps> = ({
    isDone
}) => {
    return (
        <div className={styles.status}>
            {isDone ? <p className={styles.itemdone} color='#EB4B62'> <img className={styles.icon} src={statusDone} />Отчет сдан</p> :
                <p className={styles.item}> <img className={styles.icon} src={statusNot} />Отчет не сдан</p>
            }
        </div >

    );
};