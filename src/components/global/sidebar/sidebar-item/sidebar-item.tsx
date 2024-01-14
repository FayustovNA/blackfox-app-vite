/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './sidebar-item.module.css'
import { NavLink } from 'react-router-dom';


interface SideBarItemProps {
    icon?: any;
    title: string;
    path: any;
    selected: string;
    setSelected: any;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
    title,
    icon,
    path,
    selected,
    setSelected
}) => {

    return (
        <NavLink to={path} className={`${styles.item} ${selected === path && styles.active}`} onClick={() => setSelected(path)}>
            <img className={`${styles.icon} ${selected === path && styles.active}`} src={icon}></img>
            <h2 className={styles.title}>
                {title}
            </h2>
        </NavLink>
    );
};