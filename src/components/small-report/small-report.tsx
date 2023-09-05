import styles from './small-report.module.css';

interface SmallReportProps {
    kcal?: number;
    protein?: number;
    fiber?: number;
    link?: any;
    date?: string;
}

export const SmallReport: React.FC<SmallReportProps> = ({
    kcal,
    protein,
    fiber,
    link,
    date
}) => {
    return (
        <div className={`${styles.mainbox}`}>
            <div className={styles.macros}>
                <div className={styles.grid}>
                    Калории
                    <p className={styles.unit}>{kcal} kcal</p>
                </div>
                <div className={styles.grid}>
                    Белок
                    <p className={styles.unit}>{protein} g</p>
                </div>
                <div className={styles.grid}>
                    Клетчатка
                    <p className={styles.unit}>{fiber} g</p>
                </div>
            </div>
            <p className={styles.date}>{date}</p>
            <a className={styles.link} href={link}>
                Открыть
            </a>
        </div>
    );
};