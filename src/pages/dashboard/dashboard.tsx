import styles from './dashboard.module.css';
import { SmallWidget } from '../../components/small-widget/small-widget';
import { UserPanel } from '../../components/user/user';
import { WeekTasks } from '../../components/week-tasks/week-tasks';
import Avatar from '../../images/avatar.svg'
import { ReportsPanel } from '../../components/report-panel/report-panel';
import { WeightPanel } from '../../components/weight-panel/weight-panel';


interface DashBoardProps {
    img?: any;
}

export const DashBoard: React.FC<DashBoardProps> = ({ }) => {
    return (
        <div className={styles.mainbox}>
            <h1 className={styles.title}>
                Welcome to BlackFox!
            </h1>
            <div className={styles.topwidgets}>
                <SmallWidget
                    title={'За текущий месяц'}
                    unit={'kg'}
                    currentValue={-3.5}
                    extraClass={'kg'}
                    isWithTarget={false}
                />
                <SmallWidget
                    title={'Калорийность'}
                    unit={'kcal'}
                    currentValue={1456}
                    extraClass={'kcal'}
                    isWithTarget={true}
                    targetValue={1756}
                />
                <SmallWidget
                    title={'Процент жиры'}
                    unit={'%'}
                    currentValue={33}
                    extraClass={'fats'}
                    isWithTarget={true}
                    targetValue={23}
                />
                <SmallWidget
                    title={'Активность'}
                    unit={'st'}
                    currentValue={13450}
                    extraClass={'steps'}
                />
            </div>
            <div className={styles.infopanel}>
                <div className={styles.userinfo}>
                    <UserPanel
                        username={'Nik Fayustov'}
                        location={'Moscow'}
                        age={33}
                        type={'client'}
                        startWeigth={82}
                        targetWeigth={77}
                        avatar={Avatar}
                    />
                </div>
                <WeightPanel
                    total={-15}
                />
            </div>
            <div className={styles.infopanel}>
                <ReportsPanel />
                <WeekTasks />
            </div>

        </div>
    );
};