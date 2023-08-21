import React, { FormEvent } from 'react'
import styles from './reset-password.module.css'
import { Link } from 'react-router-dom'
import imgLogo from '../../images/sm-logo.svg';

const ResetPassword = () => {

    return (
        <div className={styles.signinnpage}>

            <h2 className={styles.title}>
                Восстановление пароля
            </h2>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Введите новый пароль"
                    name='password'
                    required
                    autoComplete='off'
                />

                <input className={styles.input}
                    placeholder="Введите код из письма"
                    name='reset-code'
                    required
                    autoComplete='off'
                />

                <button type='submit' className={styles.btn}>
                    Сохранить
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

export default ResetPassword