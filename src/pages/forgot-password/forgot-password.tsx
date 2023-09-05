import styles from './forgot-password.module.css'
import { Link } from 'react-router-dom'
import imgLogo from '../../images/sm-logo.svg';

const ForgotPassword = () => {

    return (
        <div className={styles.signinnpage}>

            <h2 className={styles.title}>
                Восстановление пароля
            </h2>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type='email'
                    name='email'
                    autoComplete='off'
                    placeholder='Укажите e-mail'
                    required
                />

                <button type='submit' className={styles.btn}>
                    Восстановить
                </button>
            </form>
            <div className={styles.linksblock}>
                <p className={styles.text}>
                    Вспомнили пароль?{' '}
                    <Link className={styles.link} to='/signin'>
                        Войти
                    </Link>{' '}
                </p>
            </div>

            <div className={styles.logo}>
                <img src={imgLogo} className={styles.img}></img>
                <p className={styles.name}>BLACKFOX NUTRITION</p>
            </div>
        </div>
    )
}

export default ForgotPassword