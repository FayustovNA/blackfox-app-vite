import styles from './dashboard.module.css';
import Library from '../../images/library.svg'


interface DashBoardProps {
    img?: any;
}

export const DashBoard: React.FC<DashBoardProps> = ({ }) => {
    return (
        <div className={styles.mainbox}>
            <h1 className={styles.title}>
            Welcome to BlackFox!
            </h1>
          
        </div>
    );
};