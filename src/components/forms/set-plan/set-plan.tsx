import styles from './set-plan.module.css';

interface SetPlanProps {
    img?: any;
}

export const SetPlan: React.FC<SetPlanProps> = ({ }) => {

    return (
        <div className={`${styles.mainbox}`} >
            <h1 className={styles.title}>
                Установить план для клиента
            </h1>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    placeholder='Калорийность'
                    name='targetkcal'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Белок'
                    name='protein'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Жиры'
                    name='fats'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Углеводы'
                    name='carbs'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Клетчатка'
                    name='fiber'
                    autoComplete='off'
                />

                <input
                    className={styles.input}
                    placeholder='Шаги'
                    name='steps'
                    autoComplete='off'
                />

                <button type='submit' className={styles.btn}>
                    Установить плановые значения
                </button>
            </form>
        </div >
    );
};