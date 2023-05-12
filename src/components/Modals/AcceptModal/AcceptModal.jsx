import React from 'react'

export default function AcceptModal() {
    return (
        <div className='ErrorModal'>
            <div className="overlay__hidden"></div>
            <div className="error__modal">
                <span className='error__modal__title'>Error</span>
                <p className='error__modal__body'>Changes to your phone or email on your account are restricted temporarily. Please try again later. </p>
            </div>
        </div>
    )
}
