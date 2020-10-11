import React from 'react'
import Main from './Main'
import LastUsers from './LastUsers'
import LaundryConfirmation from './LaundryConfirmation'
import ProfileTable from './ProfileTable'
import BottomMenu from './BottomMenu'
export default function MainCompilation() {
    return (
        <div>
           <Main/>
            <div className={'blur_otter'}>
            <div className={'blur'}>
                <LastUsers/>
                <LaundryConfirmation/>
                <ProfileTable/>
            </div> 
            </div>
         <BottomMenu/>
        </div>
    )
}
