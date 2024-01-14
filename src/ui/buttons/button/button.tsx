import React, { FC } from 'react';
import cn from 'classnames/bind';
import stylesButton from './button.module.css';

export interface IButton {
    variant: 'default' | 'link' | 'link-footer' | 'circle';
    size?: 'medium' | 'large' | 'small' | 'asbox';
    color?: 'dark' | 'gold' | 'light-blue' | 'blue' | 'none' | 'none_border' | 'none_border_dark';
    buttonHtmlType?: 'button' | 'submit' | 'reset';
    onClick?: VoidFunction;
    disabled?: boolean;
    children?: React.ReactNode;
    active?: boolean;
}

const cx = cn.bind(stylesButton);

const Button: FC<IButton> = ({
    variant = 'default',
    size = 'small',
    color = 'gold',
    buttonHtmlType = 'button',
    onClick,
    disabled,
    children,
    active,
}) => {

    const mainCn = cx('button', variant, size, color, { button_active: active });

    return (
        <button
            className={mainCn}
            onClick={onClick}
            type={buttonHtmlType}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;