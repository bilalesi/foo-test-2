import React from 'react'
import styles from './style.module.scss';
import userAvatar from "../../Assets/pngs/user50x50.png";

const Avatar = () => {
    return (
        <div className={styles.Avatar}>
            <div className={styles.InnerContainer}>
                <img src={userAvatar} alt=""/>
            </div>              
        </div>
    )
}

export default Avatar
