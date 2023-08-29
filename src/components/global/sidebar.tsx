import styles from './sidebar.module.css';
import { useState } from 'react';
import Logo from '../logo/logo';
import { SideBarItem } from './sidebar-item/sidebar-item';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../images/db.svg'
import LibraryIcon from '../../images/lib.svg'
import StatsIcon from '../../images/stat.svg'
import PayIcon from '../../images/pay.svg'
import ClientsIcon from '../../images/clients.svg'
import SettingIcon from '../../images/set.svg'
import LogOutIcon from '../..//images/logout.svg'

export const SideBar = ({ }) => {
   const [selected, setSelected] = useState('/');
   const [isCoach, setIsCoach] = useState(true);

   return (
      <div className={styles.mainbox}>
         <div className={styles.logo}>
            <Logo />
         </div>
         <div className={styles.menu}>
            {isCoach ? <SideBarItem title={'Клиенты'} icon={ClientsIcon} path={'/clients'} selected={selected} setSelected={setSelected} /> : null}
            <SideBarItem title={'Дэшборд'} icon={DashboardIcon} path={'/'} selected={selected} setSelected={setSelected} />
            <SideBarItem title={'Статистика'} icon={StatsIcon} path={'/statistics'} selected={selected} setSelected={setSelected} />
            <SideBarItem title={'Библиотека'} icon={LibraryIcon} path={'/library'} selected={selected} setSelected={setSelected} />
            {/* <SideBarItem title={'Оплата'} icon={PayIcon} path={'/progress'} path={'/payouts'} selected={selected} setSelected={setSelected} /> */}
            <SideBarItem title={'Настройки'} icon={SettingIcon} path={'/settings'} selected={selected} setSelected={setSelected} />
         </div>
         <NavLink to={'/signin'} className={styles.logout}>
            <img src={LogOutIcon} alt="Выход" />
            Выход
         </NavLink>
      </div>
   );
};