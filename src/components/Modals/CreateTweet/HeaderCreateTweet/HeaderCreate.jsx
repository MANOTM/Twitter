import React from 'react'
import CloseIcon from '../../../Icons/CloseIcon'

export default function HeaderCreate({ clear }) {
    return <div className="createTweet__header">
        <span className="createTweet__closeIcon center">
            <div onClick={clear} className="iconClose__create center">
                <CloseIcon   />
            </div>
        </span>
        <span></span>
    </div>
}
