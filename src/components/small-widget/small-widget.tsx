/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './small-widget.module.css';
import Fleme from '../../images/flame.svg'
import Calories from '../../images/calories.svg'
import Steps from '../../images/feets.svg'
import Person from '../../images/person.svg'

interface WidgetProps {
    icon?: any;
    unit?: string;
    currentValue?: number;
    targetValue?: number;
    extraClass?: 'kcal' | 'steps' | 'kg' | 'fats';
    isWithTarget?: boolean;
    title: string;
}

export const SmallWidget: React.FC<WidgetProps> = ({
    unit,
    title,
    currentValue,
    targetValue,
    extraClass,
    isWithTarget,
}) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.valuebox}>

                <div className={`${styles.currentValue} ${extraClass && styles[extraClass]}`}>
                    {currentValue}
                    {!isWithTarget ?
                        <p className={styles.unitCurrentValue}>
                            {unit}
                        </p> : null
                    }
                </div>

                {isWithTarget ?
                    <p className={`${styles.targetValue}`}>
                        / {targetValue} {unit}
                    </p>
                    : null}

            </div>
            {extraClass === 'kcal' ? <img className={styles.icon} src={Calories}></img> : null}
            {extraClass === 'steps' ? <img className={styles.icon} src={Steps}></img> : null}
            {extraClass === 'fats' ? <img className={styles.icon} src={Person}></img> : null}
            {extraClass === 'kg' ? <img className={styles.icon} src={Fleme}></img> : null}
        </div>
    );
};