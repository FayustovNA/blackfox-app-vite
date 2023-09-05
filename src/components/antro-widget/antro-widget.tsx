import styles from './antro-widget.module.css'
import add from '../../images/pluss.svg'
import Progress from 'rsuite/Progress';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { useState } from 'react';
import Modal from '../modal/modal';
import { AntroForm } from '../forms/antro-form/antro-form';

interface AntroProps {
    text?: string;
}


export const AntroWidget: React.FC<AntroProps> = ({

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
            <h2 className={styles.title}>Динамика антропометрии</h2>
            <button className={styles.btn}><img className={styles.img} src={add} alt="add" onClick={openModal} /></button>
            <div className={styles.charts}>
                <div className={styles.bar}>
                    <h4 className={styles.titlebar}>Шея</h4>
                    <p className={styles.startvalue}><span className={styles.current}>{29}</span> / {30} cm</p>
                    <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                </div>

                <div className={styles.bar}>
                    <h4 className={styles.titlebar}>Талия</h4>
                    <p className={styles.startvalue}><span className={styles.current}>{70}</span> / {76} cm</p>
                    <Progress.Line percent={27} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                </div>

                <div className={styles.bar}>
                    <h4 className={styles.titlebar}>Живот</h4>
                    <p className={styles.startvalue}><span className={styles.current}>{77}</span> / {88} cm</p>
                    <Progress.Line percent={10} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                </div>

                <div className={styles.bar}>
                    <h4 className={styles.titlebar}>Бедра</h4>
                    <p className={styles.startvalue}><span className={styles.current}>{122}</span> / {125} cm</p>
                    <Progress.Line percent={12} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                </div>

                <div className={styles.bar}>
                    <h4 className={styles.titlebar}>Ягодицы</h4>
                    <p className={styles.startvalue}><span className={styles.current}>{122}</span> / {124} cm</p>
                    <Progress.Line percent={12} showInfo={false} strokeColor='#A59557' strokeWidth={7} trailColor='#6A696C' />
                </div>
            </div>

            {isOpenModal && (<Modal onClose={closeModal}><AntroForm /></Modal>)
            }

        </div >
    );
};
