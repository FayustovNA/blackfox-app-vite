import styles from './card-about-bfn.module.css';
import Button from '../../ui/buttons/button/button';
import BtnIcon from '../../images/add_dark.svg?react'
import { useState } from 'react';

interface CardAboutItemProps {
    data: any;
}

export const CardAboutItem: React.FC<CardAboutItemProps> = ({ data }) => {

    const [isContent1Visible, setIsContent1Visible] = useState(false);


    const handleButtonClick = () => {
        setIsContent1Visible(!isContent1Visible);
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.itemcontent} ${isContent1Visible ? styles.fadeOut : styles.fadeIn}`}
                    style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}>
                    <div className={styles.subtitlemain}>
                        {data.subtitle}
                    </div>
                    <div className={styles.titlemain}>
                        {data.titlemain}
                    </div>
                </div>
                <div className={`${styles.itemcontent} ${isContent1Visible ? styles.fadeIn : styles.fadeOut}`}>
                    <div className={styles.titlemain}>
                        {data.titlesecond}
                    </div>
                    <p className={styles.text}>
                        {data.text}
                    </p>
                </div>
            </div>
            <div className={`${styles.btn} ${isContent1Visible ? styles.active : styles.btn}`}>
                <Button variant={'circle'} color='none_border_dark' size={'large'} onClick={handleButtonClick}>
                    <BtnIcon className={styles.icon} />
                </Button>
            </div>
        </div>
    );
};