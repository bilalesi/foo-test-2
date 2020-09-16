import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';

export const Button = ({ name, label, onClick, outlined = false }) => {
    return (       
        <button { ...{name}} className={cn(styles.Button, outlined && styles.outlined)} onClick={onClick}>
            {label}
        </button>
    )
}
export const ButtonLink = ({ name, label, outlined = false, link,  }) => {
    return (       
        <NavLink to={link} { ...{name}} className={cn(styles.Button, outlined && styles.outlined)}>
            {label}
        </NavLink>
    )
}
