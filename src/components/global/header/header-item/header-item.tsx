/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './header-item.module.css'
import { NavLink } from 'react-router-dom';


interface HeaderItemProps {
    title: string;
    path: any;
    selected: string;
    setSelected: any;
    children: any;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({
    title,
    children,
    path,
    selected,
    setSelected
}) => {

    return (
        <NavLink to={path} className={`${styles.item} ${selected === path && styles.active}`} onClick={() => setSelected(path)}>
            {/* <img className={`${styles.icon}`} src={icon}></img> */}
            <div className={`${styles.icon} ${selected === path && styles.active}`}>
                {children}
            </div>
            <h2 className={`${styles.title} ${selected === path && styles.active}`}>
                {title}
            </h2>
        </NavLink>
    );
};