import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import { Avatar, Button, Layout, Input } from '../sharedComponents'
import { GoDeviceMobile, GoMail, GoLocation } from 'react-icons/go'
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
// import '../../node_modules/leaflet/dist/leaflet.css'

const Content = () => {
    const position = [36.761699, 3.052477 ]
    return (
        <div className={styles.Content}>
            <Layout title='Personal Information' Action={<Button label='Request Edit' name='redit'/>}>
                <div className={cn(styles.row, styles.first)}>
                    <div className={styles.accountAvatar}>
                        <Avatar/>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.grid}>
                            <Input id='firstname' placeholder='First name'/>
                            <Input id='lastname' placeholder= 'Last name'/>    
                        </div>
                        <div className={styles.grid}>
                            <Input id='firstname' placeholder='what ever'/>
                            <Input id='lastname' placeholder='everything'/>    
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.grid}>
                        <Input Icon={GoDeviceMobile} id='phone' name='phone' placeholder='phone number' type='phone'/>
                        <Input Icon={GoLocation} id='address' name='address' placeholder='Address' type='text'/>
                    </div>
                    <div className={styles.grid}>
                        <Input Icon={GoMail} type='email' id='email' name='email' placeholder='jon@doo.com'/>
                        <Input type='email' id='email' name='email' placeholder='jon@doo.com'/>
                    </div>
                </div>
                <div className={cn(styles.row, styles.Map)}>
                    <Map center={position} zoom={13} style={{ height: '250px', borderRadius: "8px"}}>
                        <TileLayer attribution='' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={position}>
                            <Popup>
                                Doctor Yazid Taibi
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            </Layout>
        </div>
    )
}

export default Content
