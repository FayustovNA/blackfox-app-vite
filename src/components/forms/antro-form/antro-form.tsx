import styles from './antro-form.module.css';


interface AntroFormProps {
    img?: any;
}

export const AntroForm: React.FC<AntroFormProps> = ({ }) => {


    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Отчет по антропометрии
            </h1>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    placeholder='Шея, см'
                    name='neck'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Талия, см'
                    name='waist'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Живот, см'
                    name='belly'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Бедра, см'
                    name='hips'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Ягодицы, см'
                    name='buttocks'
                    autoComplete='off'
                />

                <button type='submit' className={styles.btn}>
                    Сохранить замеры
                </button>
            </form>
        </div>
    );
};