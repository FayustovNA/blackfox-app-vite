import styles from './weight-chart-widget.module.css'
import Progress from 'rsuite/Progress';
import 'rsuite/dist/rsuite-no-reset.min.css';
import LineWeightChart from '../line-chart/line-chart';


interface WeightChartProps {
    text?: string;
}

export const WeightChartWidget: React.FC<WeightChartProps> = ({

}) => {

    return (
        <div className={`${styles.mainbox}`}>
            <h2 className={styles.title}>Динамика среднего веса</h2>
            <div className={styles.chart}>
                <LineWeightChart />
            </div>

        </div>
    );
};
