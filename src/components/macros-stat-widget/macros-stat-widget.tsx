import styles from './macros-stat-widget.module.css'
import Progress from 'rsuite/Progress';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { useState, useEffect } from 'react';
import TabsFilter from '../tab-filter/tab-filter';

interface MacrosProps {
    text?: string;
}

export const MacrosStatWidget: React.FC<MacrosProps> = ({

}) => {

    return (
        <div className={`${styles.mainbox}`}>
            <h2 className={styles.title}>Калорийность и макронутриенты</h2>
            <div className={styles.charts}>

                <div className={styles.chart}>
                    <div className={styles.item}>
                        <Progress.Circle percent={23} showInfo={true} strokeColor='#A59557' strokeWidth={10} trailWidth={10} trailColor='#6A696C' />
                        <div className={styles.info}>
                        </div>
                    </div>
                    <h4 className={styles.subtitle}>Белок</h4>
                    <div className={styles.values}>
                        <p className={styles.current}>{22}
                        </p>
                        <p className={styles.target}>/ {100} гр</p>
                    </div>
                </div>

                <div className={styles.chart}>
                    <div className={styles.item}>
                        <Progress.Circle percent={23} showInfo={true} strokeColor='#A59557' strokeWidth={10} trailWidth={10} trailColor='#6A696C' />
                        <div className={styles.info}>
                        </div>
                    </div>
                    <h4 className={styles.subtitle}>Жиры</h4>
                    <div className={styles.values}>
                        <p className={styles.current}>{22}
                        </p>
                        <p className={styles.target}>/ {100} гр</p>
                    </div>
                </div>

                <div className={styles.chart}>
                    <div className={styles.item}>
                        <Progress.Circle percent={23} showInfo={true} strokeColor='#A59557' strokeWidth={10} trailWidth={10} trailColor='#6A696C' />
                        <div className={styles.info}>
                        </div>
                    </div>
                    <h4 className={styles.subtitle}>Углеводы</h4>
                    <div className={styles.values}>
                        <p className={styles.current}>{22}
                        </p>
                        <p className={styles.target}>/ {100} гр</p>
                    </div>
                </div>

                <div className={styles.chart}>
                    <div className={styles.item}>
                        <Progress.Circle percent={23} showInfo={true} strokeColor='#A59557' strokeWidth={10} trailWidth={10} trailColor='#6A696C' />
                        <div className={styles.info}>
                        </div>
                    </div>
                    <h4 className={styles.subtitle}>Клетчатка</h4>
                    <div className={styles.values}>
                        <p className={styles.current}>{22}
                        </p>
                        <p className={styles.target}>/ {100} гр</p>
                    </div>
                </div>
            </div>

            <div className={styles.bar}>
                <h4 className={styles.titlebar}>Калорийность</h4>
                <p className={styles.startvalue}><span className={styles.current}>{1292}</span> / {12004} kcal</p>
                <Progress.Line percent={12} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
            </div>
            <TabsFilter />
        </div>
    );
};
