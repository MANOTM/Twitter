import React, { useState } from 'react'
import LoginModal from '../Components/LoginModal/AuthModal'
import './Forgot.css'
import { useSelector } from 'react-redux'
import ForgotEmail from './ForgotSteps/ForgotEmail'
import ForgotToken from './ForgotSteps/ForgotToken'
import NewPassword from './ForgotSteps/NewPassword'

export default function Forgot() {
    const { step } = useSelector(state => state.Forgot);
    let content;
    switch(step){
        case 3:
            content = <NewPassword />
            break
        case 2:
            content = <ForgotToken />
            break
        default:
            content = <ForgotEmail />
            break
    }
    return (
        <LoginModal>
            <div className='Forgot'>
                {
                    content 
                }
            </div>
        </LoginModal>
    )
}
