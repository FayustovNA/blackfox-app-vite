import styles from './main-page.module.css';
import Banner from '../../images/MainBanner.jpg'
import { Footer } from '../../components/global/footer/footer';
import IconNext from '../../images/Arrow.svg?react'
import { SectionAbout } from './sections/about/about';



interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = () => {


    return (
        <div className={`${styles.mainbox}`}>
            <section className={styles.section_banner}>
                <img className={styles.banner} src={Banner} />
                <h3 className={styles.section_banner_content}>
                    BlackFox Nutrition
                    <p className={styles.section_banner_subtitle}>Приводим в форму. Легко. Комфортно. Навсегда.</p>
                    <a className={styles.link}>Подробнее <IconNext className={styles.icon} /></a>
                </h3>
            </section>
            <SectionAbout></SectionAbout>
            <Footer />
        </div>
    );
};
