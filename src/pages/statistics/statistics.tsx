import styles from './statistics.module.css';
import { SmallReport } from '../../components/small-report/small-report';
import { AntroWidget } from '../../components/antro-widget/antro-widget';
import { MacrosStatWidget } from '../../components/macros-stat-widget/macros-stat-widget';


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
            <AntroWidget />
            <MacrosStatWidget />
        </div>
    );
};