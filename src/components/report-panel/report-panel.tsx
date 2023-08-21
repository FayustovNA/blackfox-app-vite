import styles from './report-panel.module.css';
import { SendReportWidget } from '../send-report-widget/send-report-widget';
import More from '../../images/keyboard_backspace.svg';
import { NavLink } from 'react-router-dom';


interface ReportsPanelProps {

}

export const ReportsPanel: React.FC<ReportsPanelProps> = ({

}) => {
    return (
        <div className={styles.mainbox}>
            <div className={styles.sendreports}>
                <SendReportWidget
                    title={'Внести вес'}
                    extraClass='kg'
                    currentValue={85.5}
                    targetValue={88}
                />
                <SendReportWidget
                    title={'Сдать отчет'}
                    extraClass='kcal'
                    currentValue={1455}
                    targetValue={1880}
                />
                <SendReportWidget
                    title={'Внести шаги'}
                    extraClass='steps'
                    currentValue={14055}
                    targetValue={18080}
                />
            </div>
            <NavLink to={'/statistics'} className={styles.more}>Подробная статистика <img src={More} /></NavLink>
        </div>
    );
};