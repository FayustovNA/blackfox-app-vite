/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from 'react-router-dom';
import Modal from '../modal/modal';
import { useState } from 'react';
import { SetPlan } from '../forms/set-plan/set-plan';
import styles from './client-card.module.css';
import Up from '../../images/up.svg';
import Down from '../../images/down.svg';


interface ClientCardItemProps {
    username?: string;
    avatar?: any;
    deltaweight?: any;
    currentweight?: any;
    startweight?: any;
    daysin?: any;
    kcal?: any;
    targetkcal?: any;
}

export const ClientCard: React.FC<ClientCardItemProps> = ({
    username,
    avatar,
    deltaweight,
    currentweight,
    startweight,
    daysin,
    targetkcal,
    kcal
}) => {

    const [isOpenModal, setisOpenModal] = useState(false);

    const openModal = () => {
        setisOpenModal(true)
    }

    const closeModal = () => {
        setisOpenModal(false)
    }

    return (
        <div className={`${styles.mainbox}`}>

            <div className={styles.firstinfo}>
                <div className={styles.avatarandname}>
                    <div className={styles.avatarbox}>
                        <img src={avatar} alt="Аватар" className={styles.avatar} />
                    </div>
                    <h3 className={styles.username}>{username}</h3>

                </div>

                <div className={styles.weights}>
                    <p className={styles.smalltext}>Стартовый вес: <span className={styles.h5}> {startweight} kg</span></p>
                    <p className={styles.smalltext}>Текуший вес:  <span className={styles.h5}>{currentweight} kg</span></p>
                    <p className={styles.smalltext}>Дней в проекте:<span className={styles.h5}>{daysin} </span></p>
                </div>
            </div>

            <div className={styles.maininfo}>
                <div className={styles.info}>
                    <p className={styles.delta}>
                        {deltaweight} kg {deltaweight > 0 ? <img className={styles.img} src={Up}></img> : <img className={styles.img} src={Down}></img>}
                    </p>
                    <p className={styles.delta}>
                        {kcal} kcal {kcal > targetkcal ? <img className={styles.img} src={Up}></img> : <img className={styles.img} src={Down}></img>}
                    </p>
                </div>
                <div className={styles.btns}>
                    <button className={styles.link} onClick={openModal}>План</button>
                    <NavLink to={'/dashboard'} className={styles.link}>Профиль</NavLink>
                </div>
            </div>

            {
                isOpenModal && (<Modal onClose={closeModal}><SetPlan /></Modal>)
            }
        </div >
    );
};