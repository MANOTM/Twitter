import React from 'react'
import Input from '../../Components/Inputs/Input'
import { useDispatch, useSelector } from 'react-redux'
import { handleBackReceive, handleSetValue } from '../../../../redux/Reducers/RegisterReducer'

export default function RegisterStepFour() {

    const { inputs: { email, verify } } = useSelector(state => state.Register)
    const dispatch = useDispatch()
    const handleChange = e => {
        const { name, value } = e.target 
        dispatch(handleSetValue({name, value}))
    }
    const handleReceive = () => {
        dispatch(handleBackReceive())
    }

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
                    change={handleChange}
                    value={verify}
                />
                <a onClick={handleReceive} className='register__step__email__error verification_code_receive a-link'>Didn't receive email?</a>
            </div>
        </div>
    </div>
}
