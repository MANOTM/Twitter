import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import Input from '../../../../Auth/Components/Inputs/Input'
import { useState } from 'react'
import './PasswordSetting.css'
import { useStateContext } from '../../../../../contexts/ContextProvider'

export default function PasswordSetting() {
    const { CallToast } = useStateContext()
    const [newPassword, setNewPassword] = useState({})
    const handleNewPassword= e => {
        const { name, value } = e.target
        setNewPassword(prev => ({...prev, [name]: value}))
    }
    return (
        <div className='PasswordSetting'>
            <HeaderRightSetting title="Change your password" />
            <div className="change__password__form Account__option__input">
                <div className="change__password__input">
                    <Input 
                        name='password'
                        id='password'
                        label='New password'
                        change={handleNewPassword}
                    />
                </div>
                <div className="change__password__input">
                    <Input 
                        name='passwordConfirmation'
                        id='passwordConfirmation'
                        label='Confirm password'
                        change={handleNewPassword}
                    />
                </div>
            </div>
            <div className={`Account__option__saveBtn ${newPassword && newPassword?.password?.length && newPassword?.passwordConfirmation?.length && 'active'}`}>
                <button onClick={()=>CallToast("We don't have that option right now 😢")}>Save</button>
            </div>
        </div>
    )
}
