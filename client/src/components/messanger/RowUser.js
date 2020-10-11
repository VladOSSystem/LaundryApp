import React from 'react'
import UserMess from '../assets/images/user.jpg'

export default function RowUser() {
    return (
        <div className={'rowUser'}>
            <div className={'rowUser_inner'} > 
                <img src={UserMess} className={'icon_src_messanger'}/>
            <div className={'info_user_message'}>
                <div className={'user_message_name'}>
                  Ivan Borzykh
                </div>
                <div className={'last_user_info'}>
                    lorerm ipsngtgtgtgnsadga......
                </div>
                
             </div>
            </div>


            <div className={'user_row_messanger'}>
                <div className={'user_row_messanger_inner'}>
                
                </div>
            </div>
        </div>
    )
}
