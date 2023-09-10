import styles from './report-form.module.css';


interface ReportFormProps {
    img?: any;
}

export const ReportForm: React.FC<ReportFormProps> = ({ }) => {


    return (
        <div className={`${styles.mainbox}`}>
            <h1 className={styles.title}>
                Отчет за текущий день
            </h1>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    placeholder='Утренний вес (67.5)'
                    name='curentweight'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Ссылка на дневник МЗР'
                    name='link'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Количество шагов'
                    name='steps'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Фаза МЦ'
                    name='cycle'
                    autoComplete='off'
                />

                <button type='submit' className={styles.btn}>
                    Отправить отчет
                </button>
            </form>
        </div>
    );
};