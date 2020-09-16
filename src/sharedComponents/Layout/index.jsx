import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';


const Layout = ({ title, Action, children}) => {
    return (
        <div className={styles.Layout}>
            <div className={styles.InnerLayout}>
                <div className={styles.LayoutHeader}>
                    <div className={cn(styles.InnerLayoutHeader, !title && !Action && styles.notBordered)}>
                        <div className={styles.LayoutHeader__Title}>
                            <div className={styles.LayoutHeader__Title_text}>
                                {title}
                            </div>
                        </div>
                        <div className={styles.LayoutHeader__Actions}>
                            { Action }
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
