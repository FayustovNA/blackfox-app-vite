import styles from './small-widget.module.css';
import imgFlame from '../../images/flame.svg';

interface WidgetProps {
    icon?: any;
    unit?: string;
    currentValue?: number;
    targetValue?: number;
    extraClass?: string;
    isWithTarget?: boolean;
    title: string;
}

export const SmallWidget: React.FC<WidgetProps> = ({
    unit,
    title,
    icon,
    currentValue,
    targetValue,
    extraClass = '',
    isWithTarget,
}) => {
    return (
        <div className={`${styles.mainbox} ${extraClass}`}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.valuebox}>

                <div className={`${styles.absolute} ${styles.head} ${styles[typeof unit === "number" ? "number" : "element"]}`}>
                    {unit}
                </div>

                {isWithTarget ? <div className={`${styles.circle}  ${isWithTarget ? styles.target : ""}`}>
                    <p className={`${styles.targetValue} ${isWithTarget ? styles.target : ""}`}>
                        {targetValue}
                    </p>
                </div> : ''}

            </div>
            <img className={styles.icon} src={icon}></img>
        </div>
    );
};