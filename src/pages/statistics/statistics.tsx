import styles from './statistics.module.css';
import { SmallReport } from '../../components/small-report/small-report';


interface StatisticsProps {
    img?: any;
}

export const Statistics: React.FC<StatisticsProps> = ({ }) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Статистика BlackFox
            </h1>
            <SmallReport
                date='21.09.2023'
                protein={21}
                fiber={22}
                kcal={1933}
            />
        </div>
    );
};