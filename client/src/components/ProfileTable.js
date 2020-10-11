import React from 'react'
import './assets/css/main.css'
import profilePic from './assets/images/user.jpg'
import chartPic from './assets/images/chart.png'
import {Link} from 'react-router-dom'

export default function ProfileTable() {
    return (
        <div className={'profile_table_outter'}>
        <Link to='/profile' className={'profile_table'}>
             <div className={'profile_table_inner_overweight'}>
                <div className={'profile_table_inner'}>
                 <img className={'profileImg_profile_table'}  src={profilePic} />
                    <div className={'name_profile_block'}>
                        <h3>Ivan</h3>
                        <h3>Borzykh</h3>
                    </div>    
                </div>
                  <div className={'bio'}>
                          ⏳Делаю маски за 24 часа
            
                     </div>
                 </div>
          </Link>
            <Link to='/laundryStatus' className={'table_profile'}> 
                    <div className={'table_profile_inner'}>
                        <img className={'chart_icon'} src={chartPic}/>
                            <h2>1425</h2>
                </div>
            </Link>
        </div>
    )
}
