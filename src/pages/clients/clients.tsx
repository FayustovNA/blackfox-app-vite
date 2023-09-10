import { ClientCard } from '../../components/client-card/client-card';
import styles from './clients.module.css';
import Avatar from '../../images/avatar.svg'

interface ClientsProps {
    img?: any;
}

export const ClientsPage: React.FC<ClientsProps> = ({ }) => {
    return (
        <div className={styles.mainbox}>
            <h1 className={styles.title}>
                Мои клиенты
            </h1>
            <div className={styles.grid}>
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
                <ClientCard
                    avatar={Avatar}
                    username='Nik Fayustov'
                    deltaweight={1.2}
                    kcal={1790}
                    targetkcal={2150}
                />
            </div>
        </div>
    );
};