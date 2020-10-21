import React, { useState, useEffect} from 'react'
import Main from './Main'
import LastUsers from './LastUsers'
import LaundryConfirmation from './LaundryConfirmation'
import ProfileTable from './ProfileTable'
import BottomMenu from './BottomMenu'
export default function MainCompilation() {
    const [modal, setModal] = useState(false)
    const [userChoose, setUserChoose] = useState([])
    const simulateClick = (e) => {
        setModal(true)
      }
    const closeClick = (e) => {
        setModal(false)
    }
    const setTimer = (e) => {
        
        setUserChoose('timer')
        setModal(false)
    }
    const keyTake = (e) => {
        setUserChoose('key')
        setModal(false)
    }
    
    return (
        <div>
           <Main/>
           <div className={'main_cover'}>
            <div className={'blur_otter'}>
                <div className={'blur'}>
                    <LastUsers/>
                    <a onClick={simulateClick}>
                     <LaundryConfirmation  />
                    </a>
                    {
                        modal == true ? (
                            <div id="modal" 
                                 className="modal fade"
                                 role="dialog">

                            <h4>Chcesz wziąć klucz?</h4>
                            <br/>
                            <div onClick={setTimer} className="btn btn-unstyled" data-dismiss="modal">Prać.</div>
                            <div onClick={keyTake} className="btn btn-unstyled" data-dismiss="modal">Zabrać rzeczy.</div>
                            <div onClick={closeClick} className="btn btn-unstyled-red" data-dismiss="modal">Cofnij</div>
                            
                          </div>
                          
                          
                        ) : (
                            <></>
                        )
                    }
                    <ProfileTable/>
                </div> 
            </div>
           </div>
         <BottomMenu/>
        </div>
    )
}
