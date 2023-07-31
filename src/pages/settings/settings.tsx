import styles from './setting.module.css';

interface SettingsProps {
    img?: any;
}

export const Settings: React.FC<SettingsProps> = ({ }) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Настройки профиля
            </h1>
        </div>
    );
};