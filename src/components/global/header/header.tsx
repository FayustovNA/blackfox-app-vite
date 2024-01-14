import styles from './header.module.css';
import { useState } from 'react';
import DashboardIcon from '../../../images/db.svg?react'
import LibraryIcon from '../../../images/lib.svg?react'
import StatsIcon from '../../../images/stat.svg?react'
import ClientsIcon from '../../../images/clients.svg?react'
import SettingIcon from '../../../images/set.svg?react'
import LogOutIcon from '../../../images/logout.svg?react'
import { HeaderItem } from './header-item/header-item';
import MainLogo from '../../../images/MainLogo.svg?react';
import Button from '../../../ui/buttons/button/button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// function getStatus() {
//     let user = localStorage.getItem('user')
//     if (user) {
//         user = JSON.parse(user)
//     } else {
//         user = null;
//     }
//     return user;
// }

export const Header = () => {
    const [selected, setSelected] = useState('/');
    const isCoach = useSelector((state: any) => state.userData.isCoach);
    const isLoggedIn = useSelector((state: any) => state.userData.isLoggedIn);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    };

    return (
        <div className={styles.mainbox}>
            <div className={styles.menu}>
                <div className={styles.mainlogo}>
                    <NavLink to={'/'}>
                        <MainLogo />
                    </NavLink>
                </div>
                {isCoach ?
                    <HeaderItem
                        title={'Клиенты'}
                        path={'/clients'}
                        selected={selected}
                        setSelected={setSelected} >
                        <ClientsIcon />
                    </HeaderItem>
                    : null}

                {isLoggedIn ?
                    <HeaderItem
                        title={'Дэшборд'}
                        path={'/dashboard'}
                        selected={selected}
                        setSelected={setSelected} >
                        <DashboardIcon />
                    </HeaderItem>
                    : null}

                {isLoggedIn ?
                    <HeaderItem
                        title={'Статистика'}
                        path={'/statistics'}
                        selected={selected}
                        setSelected={setSelected} >
                        <StatsIcon />
                    </HeaderItem>
                    : null}

                {isLoggedIn ?
                    <HeaderItem
                        title={'Библиотека'}
                        path={'/library'}
                        selected={selected}
                        setSelected={setSelected} >
                        <LibraryIcon />
                    </HeaderItem>
                    : null}

                {isLoggedIn ?
                    <HeaderItem
                        title={'Настройки'}
                        path={'/settings'}
                        selected={selected}
                        setSelected={setSelected} >
                        <SettingIcon />
                    </HeaderItem>
                    : null}

                {isLoggedIn ?
                    <HeaderItem
                        title={'Выход'}
                        path={'/signin'}
                        selected={selected}
                        setSelected={setSelected}>
                        <LogOutIcon />
                    </HeaderItem>
                    : <div>
                        <Button
                            variant={'default'}
                            size={'small'}
                            onClick={handleClick}>
                            < p > Войти</p>
                        </Button>
                    </div>}

            </div>
        </div >
    );
};