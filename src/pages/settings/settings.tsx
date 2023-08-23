import styles from './setting.module.css';
import { useState } from 'react';
import Avatar from '../../images/avatar.svg'
import { UserPanel } from '../../components/user/user';


interface SettingsProps {
    img?: any;
}

export const Settings: React.FC<SettingsProps> = ({ }) => {

    const [profileData, setProfileData] = useState({});

    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Настройки профиля
            </h1>

            <div className={styles.general}>
                <div className={styles.maininfo}>
                    <UserPanel
                        fullname={'Nik Fayustov'}
                        location={'Moscow'}
                        age={33}
                        type={'client'}
                        startWeigth={82}
                        targetWeigth={77}
                        avatar={Avatar} />
                </div>

                <form className={styles.form}>
                    <input
                        className={styles.input}
                        placeholder='Имя пользователя'
                        name='username'
                        autoComplete='off'
                    />

                    <input
                        className={styles.input}
                        placeholder='Аватар'
                        name='avatar'
                        autoComplete='off'
                    />

                    <input
                        className={styles.input}
                        placeholder='Город'
                        name='username'
                        autoComplete='off'
                    />

                    <input
                        className={styles.input}
                        name='targetWeigth'
                        autoComplete='off'
                        placeholder='Возраст'
                    />

                    <input
                        className={styles.input}
                        placeholder='Дата старта в проекте'
                        name='startDay'
                        autoComplete='off'
                    />

                    <input
                        className={styles.input}
                        name='startWeigth'
                        autoComplete='off'
                        placeholder='Стартовый вес'
                    />

                    <input
                        className={styles.input}
                        name='targetWeigth'
                        autoComplete='off'
                        placeholder='Целевой вес'
                    />

                    <input
                        className={styles.input}
                        type='password'
                        autoComplete='off'
                        placeholder='Пароль'
                        name='password'
                    />

                    <button type='submit' className={styles.btn}>
                        Сохранить изменения
                    </button>
                </form>
            </div>
        </div >
    );
};