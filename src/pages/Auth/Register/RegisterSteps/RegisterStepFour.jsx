import React from 'react'
import Input from '../../Components/Inputs/Input'
import { useSelector } from 'react-redux'

export default function RegisterStepFour() {

    const { inputs: { email } } = useSelector(state => state.Register)

    return <div className="Register__Steps step__four">
        <div className='Register__steps__title verificationt__titles'>
            <span>We sent you a code</span>
            <p className='title__verification__down'>Enter it below to verify {email}.</p>
        </div>
        <div className="register__step__inputs">
            <div>
                <Input
                    label="Verification code"
                    id="verify"
                    name="verify"
                />
                <a href='#' className='register__step__email__error verification_code_receive a-link'>Didn't receive email?</a>
            </div>
        </div>
    </div>
}
