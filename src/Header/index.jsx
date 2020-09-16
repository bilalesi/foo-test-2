import React, { useState } from 'react';
import cn from 'classnames';
import styles from "./style.module.scss";
import { IoIosNotifications, IoMdPersonAdd, IoIosArrowDown, IoIosMenu, } from 'react-icons/io';
import { GoSettings } from 'react-icons/go';
import userImage from '../Assets/pngs/user50x50.png'
import { useStateHeaderContext, useDispatchHeaderContext, displaySubMenuLeftAction } from '../Contexts'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const [dropOpen, setDropOpen] = useState(false);
    const { displayLeftMenuBtn } = useStateHeaderContext();
    const dispatch = useDispatchHeaderContext();
    const handleMenuClick = () => {
        setDropOpen(st => !st)
    }
    const handleSubMenuDisplay = (ev) => {
        dispatch(displaySubMenuLeftAction())
    }
    const isMediaChanged = useMediaQuery({ maxWidth: '774px' }, function(isMediaChanged){
        if(!isMediaChanged){
            dispatch(displaySubMenuLeftAction(false))
         }
    })
    
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderLayout}>
                <div className={styles.left}>
                    <button className={cn(styles.iconMenu, styles.leftMenuBtn)} onClick={handleSubMenuDisplay}>
                        <span className={styles.iconWrapper}>
                            <IoIosMenu/>
                        </span>                       
                    </button>                
                </div>
                <div className={styles.middle}></div>
                <div className={styles.right}>
                    <div className={styles.AuthMenu}>
                        <button onClick={handleMenuClick} className={styles.AuthMenuHeader}>
                            <div className={styles.icon}>
                               Jon Doe
                            </div>
                            <div className={styles.userIcon}>
                                <span className={styles.userIconWrapper}>
                                    <img src={userImage} alt=""/>                    
                                </span>
                            </div>
                        </button>
                        <>
                        {
                            dropOpen && <div className={styles.AuthMenuContent}>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.dropdownMenuIcon}>
                                        <IoMdPersonAdd/>
                                    </div>
                                    <div className={styles.dropdownMenuTitle}>
                                        Add Patient
                                    </div>
                                </div>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.dropdownMenuIcon}>
                                        <IoIosNotifications/>
                                    </div>
                                    <div className={styles.dropdownMenuTitle}>
                                    Notifications
                                    </div>
                                </div>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.dropdownMenuIcon}>
                                        <GoSettings/>
                                    </div>
                                    <div className={styles.dropdownMenuTitle}>
                                        Settings
                                    </div>
                                </div>
                            </div>
                        }
                        </>
                    </div>
                    <div className={styles.iconMenu}>
                        <span className={styles.iconWrapper}>
                            <IoMdPersonAdd/>
                        </span>
                        <div className={styles.iconText}>
                            Add Patient
                        </div>
                    </div>
                    <div className={styles.iconMenu}>
                        <span className={styles.iconWrapper}>
                            <IoIosNotifications/>
                        </span>
                        <div className={styles.iconText}>
                            Notifications
                        </div>
                    </div>
                    <div className={styles.accountAuthenticated}>
                        <div className={styles.userIcon}>
                            <span className={styles.userIconWrapper}>
                                <img src={userImage} alt=""/>                    
                            </span>
                        </div>
                        <div className={styles.userName}>
                            Jon Doe
                        </div>
                        <div className={styles.hiddenMenu}>
                            <IoIosArrowDown size={16}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
