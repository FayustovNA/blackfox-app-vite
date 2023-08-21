import styles from './weight-panel.module.css'
import ApexChart from '../column-chart/column-chart';



interface WeightPanelProps {
    total?: number;

}

export const WeightPanel: React.FC<WeightPanelProps> = ({
    total,
}) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h2 className={styles.title}>Изменения веса по неделям</h2>
            <div className={styles.total}>
                {total} <span className={styles.unit}>kg</span>
            </div>
            <div className={styles.chart}>
                <ApexChart />
            </div>
        </div>
    );
};