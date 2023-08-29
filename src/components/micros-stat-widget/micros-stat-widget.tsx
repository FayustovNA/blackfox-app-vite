import styles from './micros-stat-widget.module.css'
import Progress from 'rsuite/Progress';
import 'rsuite/dist/rsuite-no-reset.min.css';
import TabsFilter from '../tab-filter/tab-filter';

interface MicrosProps {
    text?: string;
}

export const MicrosStatWidget: React.FC<MicrosProps> = ({

}) => {

    return (
        <div className={`${styles.mainbox}`}>
            <h2 className={styles.title}>Баланс основных микронутриентов</h2>
            <div className={styles.charts}>
                <div className={styles.bars}>

                    <div className={styles.bar}>
                        <h4 className={styles.titlebar}>Кальций</h4>
                        <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76}</p>
                        <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                    </div>

                    <div className={styles.bar}>
                        <h4 className={styles.titlebar}>Витамин Д</h4>
                        <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76}</p>
                        <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                    </div>

                    <div className={styles.bar}>
                        <h4 className={styles.titlebar}>Железо</h4>
                        <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76}</p>
                        <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                    </div>

                    <div className={styles.bar}>
                        <h4 className={styles.titlebar}>Калий</h4>
                        <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76}</p>
                        <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                    </div>

                    <div className={styles.bar}>
                        <h4 className={styles.titlebar}>Натрий</h4>
                        <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76}</p>
                        <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                    </div>
                </div>

                <div className={styles.circle}>
                    <h4 className={styles.titlecircle}>Рейтинг рациона</h4>
                    <div className={styles.item}>
                        <p className={styles.score}>{77}</p>
                        <Progress.Circle percent={23} showInfo={false} strokeColor='#05CD99' strokeWidth={10} trailWidth={10} trailColor='#6A696C' />
                    </div>
                </div>
            </div>

            <TabsFilter />
        </div>
    );
};
