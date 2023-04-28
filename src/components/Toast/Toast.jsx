import React from 'react'
import './Toast.css'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Toast( { content } ) {

    const { Toast:showToast } = useStateContext()

    return (
        <div className={`toast ${showToast.status && 'showToast'}`}>
            <span className="toast__content">
                { showToast.content }
            </span>
        </div>
    )
}
