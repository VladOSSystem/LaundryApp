import React from 'react'
import './assets/css/main.css'

export default function LaundryConfirmation() {
    return (
    <div className={'laundry_confirmation_outter'}> 
        <div className={'laundry_confirmation'}>
            <svg className={'icon'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <circle className={'circle'} cx="30" cy="30" r="30" fill="none"/>
            <path className={'check'} fill="none" d="m12.5 28l10.0 13 24-22.2"/></svg>
        </div>
    </div>
    )
}
