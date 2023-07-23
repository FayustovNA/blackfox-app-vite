import styles from './user.module.css'
import More from '../../images/more.svg'
import Location from '../../images/location.svg'


interface UserPanelProps {
    type?: string;
    avatar?: any;
    fullname?: string;
    location?: string;
    target?: string;
    startWeigth?: number;
    targetWeigth?: number;
    age?: number;
    countClients?: number;
    countReports?: number;
}

export const UserPanel: React.FC<UserPanelProps> = ({
    avatar,
    fullname,
    location,
    age,
    type,
    startWeigth,
    targetWeigth,
    countClients,
    countReports
}) => {
    return (
        <div className={`${styles.mainbox}`}>
            <img src={More} alt="Подробнее" className={styles.more} />
            <div className={styles.avatarbox}>
                <img src={avatar} alt="Аватар" className={styles.avatar} />
            </div>
            <div className={styles.userinfo}>
                <p className={styles.fullname}>{fullname}</p>
                <p className={styles.location}><img src={Location} alt="Локация" />{location}</p>
                <div className={styles.statspanel}>
                    <div className={styles.item}>
                        <h4 className={styles.itemtitle}>Возраст</h4>
                        <p className={styles.itemvalue}>{age}</p>
                    </div>
                    <div className={styles.itemcenter}>
                        {type === 'client' ? <h4 className={styles.itemtitle}>Стартовый вес</h4> : <h4 className={styles.itemtitle}>Клиентов</h4>}
                        {type === 'client' ? <p className={styles.itemvalue}>{startWeigth} <span className={styles.unitvalue}>кг</span></p> :
                            <p className={styles.itemvalue}>{countClients}</p>}
                    </div>
                    <div className={styles.item}>
                        {type === 'client' ? <h4 className={styles.itemtitle}>Целевой вес</h4> : <h4 className={styles.itemtitle}>Новых отчетов</h4>}
                        {type === 'client' ? <p className={styles.itemvalue}>{targetWeigth} <span className={styles.unitvalue}>кг</span></p> :
                            <p className={styles.itemvalue}>{countReports}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};