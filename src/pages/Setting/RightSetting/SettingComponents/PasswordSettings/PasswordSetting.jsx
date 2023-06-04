import React from 'react'
import HeaderRightSetting from '../../../Components/HeaderRightSetting/HeaderRightSetting'
import Input from '../../../../Auth/Components/Inputs/Input'
import { useState } from 'react'
import './PasswordSetting.css'
import { useStateContext } from '../../../../../contexts/ContextProvider'
import axios from '../../../../../api/axios'
import { useNavigate } from 'react-router-dom'

export default function PasswordSetting() {
    const { CallToast, showErrorFunction, SetTitle } = useStateContext()
    SetTitle('Change your password')
    const [newPassword, setNewPassword] = useState({})
    const navigate = useNavigate();
    const handleNewPassword= e => {
        const { name, value } = e.target
        setNewPassword(prev => ({...prev, [name]: value}))
    }

    const hanldeSubmit = e => {
        e.preventDefault()
        const { password, passwordConfirmation } = newPassword
        if(password?.trim() === passwordConfirmation?.trim()){
            if(password?.trim().length >= 8){
                axios
                .post('updateInfo',{password})
                .then(res => {
                    CallToast(res?.data?.message + '😊✨✨')
                    navigate('/settings/account')
                })
                .catch(err => showErrorFunction())
            }else{
                CallToast('password is too short🤦‍♂️🤦‍♂️');
            }
        }else{
            CallToast('The password not match🤷🤷');
        }
    }

    return (
        <form onSubmit={hanldeSubmit} className='PasswordSetting'>
            <HeaderRightSetting title="Change your password" />
            <div className="change__password__form Account__option__input">
                <div className="change__password__input">
                    <Input 
                        icon={true}
                        type="password"
                        name='password'
                        id='password'
                        label='New password'
                        value={newPassword?.password || ''}
                        change={handleNewPassword}
                    />
                </div>
                <div className="change__password__input">
                    <Input 
                        icon={true}
                        type="password"
                        name='passwordConfirmation'
                        id='passwordConfirmation'
                        label='Confirm password'
                        value={newPassword?.passwordConfirmation || ''}
                        change={handleNewPassword}
                    />
                </div>
            </div>
            <div className={`Account__option__saveBtn ${newPassword && newPassword?.password?.length && newPassword?.passwordConfirmation?.length && 'active'}`}>
                {/* <button onClick={()=>CallToast("We don't have that option right now 😢")}>Save</button> */}
                <button>Save</button>
            </div>
        </form>
    )
}
