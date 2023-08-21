import React, { FormEvent } from 'react'
import styles from './sign-up.module.css'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import imgLogo from '../../images/sm-logo.svg';

// import { useDispatch } from '../../services/hooks'

const SignUp = () => {
    const { values, handleChange } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    //     const navigate = useNavigate()
    //   const dispatch = useDispatch()

    const checkSignUpValidity = (): boolean => {
        return (
            !!values.email &&
            !!values.username &&
            !!values.password &&
            !!values.confirmPassword
        )
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (checkSignUpValidity()) {
            // dispatch(registerUser(values))
            // navigate('/signin')
        } else {
            console.error('Нужно заполнить все данные')
        }
    }

    return (
        <div className={styles.signinnpage}>

            <h2 className={styles.title}>
                Первый шаг к своей цели сделан, вперед!
            </h2>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <input
                    className={styles.input}
                    placeholder='Имя пользователя'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    required
                />
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
                <input
                    className={styles.input}
                    type='password'
                    placeholder='Повторите пароль'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type='submit' className={styles.btn}>
                    Зарегистрироваться
                </button>
            </form>
            <div className={styles.linksblock}>
                <p className={styles.text}>
                    Уже зарегистрированы?{' '}
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

export default SignUp