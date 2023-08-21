import { LibraryItem } from '../../components/library-item/library-item';
import styles from './library.module.css';
import { dataSet } from '../../utils/data';



interface LibraryProps {
    img?: any;
}

export const Library: React.FC<LibraryProps> = ({ }) => {

    const items = dataSet;

    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Библиотека BlackFox
            </h1>
            <div className={styles.grid}>
                {items.map((item, index) => {
                    return (
                        <LibraryItem
                            index={index}
                            key={index}
                            img={item.img}
                            title={item.title}
                            link={item.link}
                            section={item.section}
                        />
                    );
                })}
            </div>
        </div>
    );
};
