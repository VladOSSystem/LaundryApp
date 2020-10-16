import React from 'react'
import './assets/css/main.css'
import BottomMenu from './BottomMenu'
import BackArrow from '../components/assets/images/back.png'
import bigWash from '../components/assets/images/big-wash.png'
import { Link } from 'react-router-dom'
import Chart from './widgets/Chart'
import {data} from './mock'
import ChartrStats from './assets/images/chart-stats.png'
 export default function Laundry() {


    return (
        <div>
            <div className={"main_laundry_status"}>
                <div className={"blur_main_laundry_status"}>
                        <Link to='/dashboard'>
                        <img src={BackArrow}  className={'img_arrow_main_laundry_status'} />
                        </Link>
                        <div className={'info_laundry'}>
                            <img src={bigWash} className={'info_laundry_img'}/>
                        </div>
                    </div>
                </div>

            <div className={'laundry_stats'}>
                <div className={'status_item_laundry'}>
                    <div className={'blur_status_item_laundry'}>
                    <img src={ChartrStats}/>
                      <div className={'inner_stats_info'}>
                        <h2>Ilość prań:</h2>
                        <h3>344</h3>
                      </div>
                      </div>
                </div>
                 <div className={'chart_container'} >
                    <Chart data={data}/>
                 </div>
                 <div className={'inprogress'}>
                    <h3>W trakcie prania</h3>
                 </div>
                 <div className={'key_container'}>
                 <h3>Oddaj klucz</h3>
                 </div>
                 <div className={'stop_container'}>
                    <h3>Skońć pranie</h3>
                 </div>
                
            </div>

            <BottomMenu/>
        </div>
    )
}
