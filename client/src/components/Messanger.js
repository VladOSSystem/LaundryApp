import React from 'react'
import MessengerSearch from './messanger/MessangerSearch'
import RowUser from './messanger/RowUser'
import BottomMenu from './BottomMenu'
import { Link } from 'react-router-dom'
import './assets/css/main.css'
export default function Messanger() {

    return (
        <div>
            <div className={'messangerCover'}>
                <div className={'messangerCover_inner'}>
                    <MessengerSearch/>
                    <Link to='/message/67868978658' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/67868978652' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/67868978654' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/43534626236' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/3465437687568' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/7895678356' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/646245768' >
                        <RowUser/>
                    </Link>
                    <Link to='/message/13246245787' >
                        <RowUser/>
                    </Link>
                    
                    
                    </div>
                </div>
            <BottomMenu/>
        </div>
    )
}