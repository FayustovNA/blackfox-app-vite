import styles from './library-item.module.css';
import Library from '../../images/library.svg'


interface LibraryItemProps {
    img?: any;
    index?: number;
    title: string;
    link?: any;
    section?: string;
}

export const LibraryItem: React.FC<LibraryItemProps> = ({
    img,
    index,
    link,
    title,
    section,
}) => {
    return (
        <div className={`${styles.mainbox}`}>
            <div className={styles.section}>
                <p className={styles.sectiontitle}>{section}</p>
                <img className={styles.icon} src={Library}></img>
            </div >
            <div className={styles.maininfo}>
                <img className={styles.cover} src={img}></img>
                <div className={styles.iteminfo}>
                    <h3 className={styles.subtitle}>Тема {index}</h3>
                    <h2 className={styles.title}>{title}</h2>
                    <a className={styles.link} href={link}>
                        Изучить
                    </a>
                </div>
            </div>

        </div >
    );
};