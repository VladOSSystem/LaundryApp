import React, {useState, useRef, useEffect} from 'react'
import { uuid } from 'uuidv4'
import '../assets/css/message.css'
import Send from '../assets/images/send.png'
import { Link } from 'react-router-dom'
export default function InnerMessaging() {
    const message = useRef(null)
    const [messageStorage, setMessageStorage] = useState([
        {id: "6367017d-8358-40d8-a349-746799dccde4", time: 1602581212599, message: "sagsag"}
    ])

  
    const handleSend = e => {
        e.preventDefault();

        const messageSetter = {
            id:uuid(),
            time: new Date().getTime(),
            message:message.current.value
        }
        
        setMessageStorage([
            ...messageStorage,
            messageSetter
        ])
        message.current.value = ''
        
        const lastElement = messageStorage.length
        const idOfLastElement = messageStorage[lastElement - 1].id
        const elementToPop = document.querySelector(`#v${idOfLastElement}`)
        elementToPop.scrollIntoView()
        console.log(elementToPop)
    }
    console.log(messageStorage.length)
    return (
         <div className={'inner_chat_display'}>
            <div className={'header_chat'}>
                <div className={'header_chat_items'}>
                    <Link to="/messanger">Wróć</Link>
                    header
                </div>
            </div>
            <div className={'message_field'}>
                {
                    messageStorage != [] ? (
                        messageStorage.map(v => {
                        return (
                            <p id={`v${v.id}`} key={uuid()}>{v.message}</p>
                        )
                        })
                    ):(
                        <React.Fragment>
                            <p>Nothing to update</p>
                        </React.Fragment>
                    )
                }
            </div>
           <div className={"form_wrapper"} >
              <form onSubmit={handleSend} className={'inner_chat'}>
                    <input ref={message} required placeholder="Type ..." className={'inner_chat_input'}/>
                    <button type="submit" className={'inner_chat_button'}><img src={Send}/></button>
              </form>
            </div>
        </div>
    )
}
