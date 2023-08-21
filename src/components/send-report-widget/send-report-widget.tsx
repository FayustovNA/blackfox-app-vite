import styles from './send-report-widget.module.css';
import React from 'react';
import Progress from 'rsuite/Progress';
import 'rsuite/dist/rsuite-no-reset.min.css';


interface SendReportWidgetProps {
    currentValue?: number;
    targetValue?: number;
    extraClass?: "kcal" | "steps" | "kg",
    title: string;
}

export const SendReportWidget: React.FC<SendReportWidgetProps> = ({
    title,
    currentValue,
    targetValue,
    extraClass,
}) => {

    return (
        <div className={`${styles.mainbox}`}>
            <div className={styles.iconbox}>
                <svg className={`${styles.icon} ${extraClass && styles[extraClass]}`} viewBox="0 0 35 35" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8021 16.0417H18.9583V6.19791C18.9583 5.39145 18.3065 4.73958 17.5 4.73958C16.6935 4.73958 16.0417 5.39145 16.0417 6.19791V16.0417H6.19791C5.39145 16.0417 4.73958 16.6935 4.73958 17.5C4.73958 18.3065 5.39145 18.9583 6.19791 18.9583H16.0417V28.8021C16.0417 29.6085 16.6935 30.2604 17.5 30.2604C18.3065 30.2604 18.9583 29.6085 18.9583 28.8021V18.9583H28.8021C29.6085 18.9583 30.2604 18.3065 30.2604 17.5C30.2604 16.6935 29.6085 16.0417 28.8021 16.0417Z" fill='current' />
                </svg>
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={`${styles.currentValue} ${extraClass && styles[extraClass]}`}>
                {currentValue}
            </div>
            <div className={styles.bar}>
                <p className={styles.targetValue}>{targetValue}<span>{extraClass}</span></p>
                <Progress.Line percent={77} showInfo={false} strokeColor={extraClass === 'kg' ? '#F1A33B' : '#3A82F7' && extraClass === 'kcal' ? '#05CD99' : '#3A82F7'} strokeWidth={7} trailColor='#6A696C' />
            </div>
        </div >
    );
};