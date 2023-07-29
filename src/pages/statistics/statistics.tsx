import styles from './statistics.module.css';


interface StatisticsProps {
    img?: any;
}

export const Statistics: React.FC<StatisticsProps> = ({ }) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Статистика BlackFox
            </h1>

        </div>
    );
};