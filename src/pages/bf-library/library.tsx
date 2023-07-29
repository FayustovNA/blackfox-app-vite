import styles from './library.module.css';



interface LibraryProps {
    img?: any;
}

export const Library: React.FC<LibraryProps> = ({ }) => {
    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Библиотека BlackFox
            </h1>

        </div>
    );
};