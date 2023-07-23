import styles from './logo.module.css';
import imgLogo from '../../images/Logo.svg';

function Logo() {

    return (
        <div className={styles.logo}>
            <img src={imgLogo} className={styles.img}></img>
            <div className={styles.text}>
                <p className={styles.h1}>BLACKFOX</p>
                <p className={styles.h2}>NUTRITION</p>
            </div>
        </div>

    );
}

export default Logo;