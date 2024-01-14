import { CardAboutItem } from '../../../../components/card-about-bfn/card-about-bfn';
import { useRef } from 'react';
import Button from '../../../../ui/buttons/button/button';
import styles from './about.module.css';
import Next from '../../../../images/Arrow.svg?react';
import Prev from '../../../../images/Prev.svg?react';
import { dataSet } from '../../../../utils/mocks-sec-about';

export const SectionAbout = () => {

    const galleryRef = useRef(null);
    const items = dataSet;

    const pressPrev = () => {
        const width = 372;
        galleryRef.current.scrollLeft = galleryRef.current.scrollLeft - width;
        console.log(width);
    };

    const pressNext = () => {
        const width = 372;
        galleryRef.current.scrollLeft = galleryRef.current.scrollLeft + width;
        console.log(width);
    };

    return (
        <div className={styles.section} >

            <div className={styles.section_content}>
                <div className={styles.section_titles}>
                    <h3 className={styles.title}>
                        Познакомьтесь с BFN
                    </h3>
                    <h4 className={styles.subtitle}>Если ты  устал мечтать,
                        BFN поможет это сделать.
                    </h4>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.btnarrows}>
                        <Button variant='circle' color='none_border' onClick={pressPrev}><Prev className={styles.icon} /></Button>
                        <Button variant='circle' color='none_border' onClick={pressNext}><Next className={styles.icon} /></Button>
                    </div>
                    <div className={styles.galleryitems} ref={galleryRef}>

                        {items.map((item, index) => {
                            return (
                                <CardAboutItem
                                    key={index}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}