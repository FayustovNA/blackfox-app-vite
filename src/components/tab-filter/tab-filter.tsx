import React, { FC } from "react";
import styles from './tab-filter.module.css';
import { useState } from "react";


const TabsFilter = ({ }) => {

    const [activeTab, setActiveTab] = useState("W");

    const toggleTabs = (item: string) => {
        setActiveTab(item)
    }

    return (
        <div className={styles.tabs}>
            <div className={styles.line}>
                <div className={styles.btnbox}>
                    <button className={`${styles.btn} ${activeTab === 'W' && styles.active}`}
                        onClick={() => toggleTabs('W')}
                    >W</button>
                </div>

                <div className={styles.btnbox}>
                    <button className={`${styles.btn} ${activeTab === 'M' && styles.active}`}
                        onClick={() => toggleTabs('M')}
                    >M</button>
                </div>

                <div className={styles.btnbox}>
                    <button className={`${styles.btn} ${activeTab === '3M' && styles.active}`}
                        onClick={() => toggleTabs('3M')}
                    >3M</button>
                </div>

                <div className={styles.btnbox}>
                    <button className={`${styles.btn} ${activeTab === '6M' && styles.active}`}
                        onClick={() => toggleTabs('6M')}
                    >6M</button>
                </div>
            </div>
        </div >
    );
};

export default TabsFilter;