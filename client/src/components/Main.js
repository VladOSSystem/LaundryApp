import React from 'react'
import './assets/css/main.css'
import profilePic from './assets/images/user.jpg'
import bellNotification from './assets/images/bell.png'
import waveBottom from './assets/images/waveBottom.png'
import waveMid from './assets/images/waveMid.png'
import waveTop from './assets/images/waveTop.png'
import {Link} from 'react-router-dom'
export default function Main() {

    return (
        <div className={'mainBlock'}>
            <div className={'userSettings'}>
                <div className={'ring'}>
                 <Link to='/messanger'>
                  <img className={'bellNotification'} src={bellNotification}/>
                  </Link>
                  <div className={'notificationBell'}>1</div>
                </div>
                <div className={'profile_outter'}>
                    <Link to='/profile'>
                        <div className={'profile'}></div>
                        <img className={'profileImg'}  src={profilePic} />
                    </Link>

                </div>
            </div>
            <div className={"wash_outter"}>
                    <div className={'wash_machine'}>
                    </div>
                    <h1 className={'grater_z'}>Aplikacja do rezerwacji pralni!</h1>
                    <div className="waveWrapper waveAnimation">
                        <div className={"waveWrapperInner bgTop"}>
                        <div className={"wave waveTop"} style={{backgroundImage: "url(" + waveTop +")"}}></div>
                    </div>
                    <div className={"waveWrapperInner bgMiddle"}>
                        <div className={"wave waveMiddle"} style={{backgroundImage: "url(" + waveMid  +")"}}></div>
                    </div>
                    <div className={"waveWrapperInner bgBottom"}>
                        <div className={"wave waveBottom"} style={{backgroundImage: "url(" + waveBottom +")"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
