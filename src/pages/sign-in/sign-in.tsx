import { FormEvent } from 'react'
import styles from './sign-in.module.css'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import imgLogo from '../../images/sm-logo.svg';
import { signIn } from '../../services/slices/userSlice'

import { useDispatch } from '../../services/hooks'

const SignIn = () => {
    const { values, handleChange } = useForm({
        email: '',
        password: '',
    })


    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(signIn(values)).then((result) => {
            if (result) {
                navigate('/dashboard')
            }
        })
    }

    return (
        <div className={styles.signinnpage}>

            <h2 className={styles.title}>
                Пора обновить дневник!
            </h2>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <input
                    className={styles.input}
                    type='email'
                    name='email'
                    autoComplete='off'
                    placeholder='E-mail'
                    value={values.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className={styles.input}
                    type='password'
                    autoComplete='off'
                    placeholder='Пароль'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    required
                />

                <button type='submit' className={styles.btn}>
                    Войти
                </button>
            </form>
            <div className={styles.linksblock}>
                <p className={styles.text}>
                    Вы — новый пользователь?
                    <Link className={styles.link} to='/signup'>
                        {' '}
                        Зарегистрироваться
                    </Link>
                </p>
                <p className={styles.text}>
                    Забыли пароль?{' '}
                    <Link className={styles.link} to='/forgot-password'>
                        Восстановить
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

export default SignIn