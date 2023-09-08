import styles from './statistics.module.css';
import { SmallReport } from '../../components/small-report/small-report';
import { AntroWidget } from '../../components/antro-widget/antro-widget';
import { MacrosStatWidget } from '../../components/macros-stat-widget/macros-stat-widget';
import { MicrosStatWidget } from '../../components/micros-stat-widget/micros-stat-widget';
import { WeightChartWidget } from '../../components/weight-chart-widget/weight-chart-widget';


interface StatisticsProps {
    img?: any;
}

export const Statistics: React.FC<StatisticsProps> = ({ }) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Статистика
            </h1>
            <div className={styles.topwidgets}>
                <SmallReport
                    date='21.09.2023'
                    protein={21}
                    fiber={22}
                    kcal={1933}
                />
                <SmallReport
                    date='21.09.2023'
                    protein={21}
                    fiber={22}
                    kcal={1933}
                />
                <SmallReport
                    date='21.09.2023'
                    protein={21}
                    fiber={22}
                    kcal={1933}
                />
            </div>

            <div className={styles.infopanel}>
                <WeightChartWidget />
                <AntroWidget />
            </div>

            <div className={styles.infopanel}>
                <MacrosStatWidget />
                <MicrosStatWidget />
            </div>
        </div>
    );
};