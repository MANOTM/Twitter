import React from 'react'
import Input from '../../Components/Inputs/Input'
import '../Forgot.css'
import { StopForgot, handleForgotChange, handleLoading, handlePasswordCheck } from '../../../../redux/Reducers/ForgotReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from '../../../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../../../contexts/ContextProvider'
import Loading from '../../../../components/Loading/Loading'

export default function NewPassword() {
    const { inputs: { password, passwordConfirmation, email, token }, checkPassword, loading } = useSelector(state => state.Forgot);
    const [messages, setMessages] = useState();
    const { CallToast } = useStateContext();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChangle = e => {
        const { name, value } = e.target
        dispatch(handleForgotChange({name, value}));
        dispatch(handlePasswordCheck())
        if(name === 'password') {
            if(value.length > 3 && value.length < 8) {
                setMessages(prev => ({...prev, errorPassword: 'Your password needs to be at least 8 characters.'}))
            }else if(!value.length){
                setMessages(prev => ({...prev, errorPassword: 'Your password needs to be at least 8 characters.'}))
            }else{
                setMessages(prev => ({...prev, errorPassword: null}))
            }
        }
        if(name === 'passwordConfirmation') {
            if(value == password){
                setMessages(prev => ({...prev, errorConfirme: null}))
            }else if(value != password){
                setMessages(prev => ({...prev, errorConfirme: 'Passwords do not match.'}))
            }else if(value.length > 3 && value.length < 8) {
                setMessages(prev => ({...prev, errorConfirme: 'Your password needs to be at least 8 characters.'}))
            }else{
                setMessages(prev => ({...prev, errorConfirme: null}))
            }
        }
    }
    const handleResetPassword = async() => {
        dispatch(handleLoading())
        try{
            const { data } = await axios.post('/reset',{
                email,
                token:parseInt(token),
                password,
                passwordConfirmation
            })
            if(data) {
                dispatch(handleLoading())
                CallToast('you password reseted jrb db dir login😁');
                dispatch(StopForgot())
                navigate('/i/flow/login',3500);
            }
        }catch(err){
            dispatch(handleLoading())
            if(err?.response?.status === 422){
                return CallToast('token mismatch😒');
            }
            CallToast('maybe server error😒');
        }
    }
    return loading ? <div className="loading__dev"><Loading /></div> : <div className="forgot__content">
        <div className="forgot__header">
            <span className="forgot__title">Choose a new password</span>
            <p className="small-title">Make sure your new password is 8 characters or more. Try including numbers, letters, and punctuation marks for a <a className='a-link' target='_blank' href="https://help.twitter.com/en/safety-and-security/account-security-tips?ref=password_reset">strong password</a>. </p>
        </div>
        <span className="forgot__second__paragraph">You'll be logged out of all active Wazoo sessions after your password is changed.</span>
        <div className="forgot__passwords">
            <div className="forgot__email__input">
                <Input
                    label="Enter a new password"
                    id="password"
                    name="password"
                    icon={true}
                    type="password"
                    change={handleChangle}
                />
                <span className='forgot__password__error'> { messages?.errorPassword } </span>
            </div>
            <div className="forgot__email__input">
                <Input
                    label="Confirm your password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    icon={true}
                    type="password"
                    change={handleChangle}
                />
                <span className='forgot__password__error'> { messages?.errorConfirme } </span>
            </div>
        </div>
        <div className="forgot__button">
            <button onClick={handleResetPassword} className={!checkPassword ? 'disabled' : ''}>change password</button>
        </div>
    </div>
}
