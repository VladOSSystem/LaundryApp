import React, { useState, useEffect} from 'react'
import Main from './Main'
import LastUsers from './LastUsers'
import LaundryConfirmation from './LaundryConfirmation'
import ProfileTable from './ProfileTable'
import BottomMenu from './BottomMenu'
export default function MainCompilation() {
    const [modal, setModal] = useState(false)
    const simulateClick = (e) => {
        console.log('click')
        setModal(true)
      }
    const closeClick = (e) => {
        setModal(false)

        console.log('close')
    }
    //   useEffect(() => {
    //     setModal(false)
    //   });
      console.log(modal)
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
                            <div id="modal" className="modal fade" role="dialog">
                            <h4>Chcesz wziąć klucz?</h4>
                            <p className="modal-p"> 1) Prać.</p>
                            <p className="modal-p"> 2) Zabrać rzeczy.</p>
                             
                            <div type="button"  className="btn btn-unstyled" data-dismiss="modal">1</div>
                            <div type="button"  className="btn btn-unstyled" data-dismiss="modal">2</div>
                            <div type="button"  onClick={closeClick} className="btn btn-unstyled" data-dismiss="modal">Cofnij</div>
                            
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
