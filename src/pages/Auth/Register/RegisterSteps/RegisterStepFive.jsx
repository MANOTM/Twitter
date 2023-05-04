import React from 'react'
import Input from '../../Components/Inputs/Input'

export default function RegisterStepFive() {
    return <div className="Register__Steps step__four">
        <div className='Register__steps__title verificationt__titles'>
            <span>You'll need a password</span>
            <p className='title__verification__down'>Make sure it’s 8 characters or more.</p>
        </div>
        <div className="register__step__inputs">
            <div>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    icon={true}
                />
            </div>
        </div>
    </div>
}
