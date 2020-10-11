import React from 'react'
import './assets/css/main.css'
import Mess from './assets/images/messaging.png'
import Profile from './assets/images/profile.png'
import Laundry from './assets/images/machine.png'
import {Link} from 'react-router-dom'
export default function BottomMenu() {
    return (
        <div className={'bottomMenu'}>
                <Link to='/profile'>
                  <img src={Profile} className={'menu_icons'}/>
                </Link>
                <Link to='/messanger'>
                  <img src={Mess} className={'menu_icons'}/>
                </Link>
                <Link to='/laundryStatus'>
                  <img src={Laundry} className={'menu_icons'}/>
                </Link>
        </div>
    )
}
