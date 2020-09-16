import React from 'react';
import cn from 'classnames';
import styles from "./style.module.scss";
import { Layout, Button } from '../sharedComponents'
import {FaUserTie, FaMedrt, FaUsers, FaLaptop} from 'react-icons/fa'
import { BrowserRouter as Router, NavLink} from 'react-router-dom'
import { useStateHeaderContext, useDispatchHeaderContext, displaySubMenuLeftAction } from '../Contexts'
import { IoIosClose } from 'react-icons/io';


const LeftMenu = () => {
    const { displaySubMenuLeft } = useStateHeaderContext();
    const dispatch = useDispatchHeaderContext();
    function handleLeftSubMenuClick(){
        dispatch(displaySubMenuLeftAction(false));
    }
    return (
        <div className={cn(styles.LeftMenu, displaySubMenuLeft && styles.doShow)}> 
            <Layout>
                {
                    displaySubMenuLeft && <div style={{
                            position: 'absolute',
                            top: '-28px',
                            right: '0px'
                        }}>
                            <Button label='Close' onClick={handleLeftSubMenuClick}></Button>
                        </div>
                    }
                <Router>
                    <NavLink to='/profile' className={styles.LeftMenuItem}>
                        <div className={styles.LeftMenuItemIcon}>
                            <FaUserTie/>
                        </div>
                        <div className={styles.LeftMenuItemText}>
                            My Profile
                        </div>
                    </NavLink>
                    <NavLink to='/consultcauses' className={styles.LeftMenuItem}>
                        <div className={styles.LeftMenuItemIcon}>
                            <FaMedrt/>
                        </div>
                        <div className={styles.LeftMenuItemText}>
                            Consultation Reasons
                        </div>
                    </NavLink>
                    <NavLink to='/users' className={styles.LeftMenuItem}>
                        <div className={styles.LeftMenuItemIcon}>
                            <FaUsers/>
                        </div>
                        <div className={styles.LeftMenuItemText}>
                            Users
                        </div>
                    </NavLink>
                    <NavLink to='subscribe' className={styles.LeftMenuItem}>
                        <div className={styles.LeftMenuItemIcon}>
                            <FaLaptop/>
                        </div>
                        <div className={styles.LeftMenuItemText}>
                            Subscription
                        </div>
                    </NavLink>
                </Router>
            </Layout>
        </div>
    )
}

export default LeftMenu
