import React, { useEffect } from 'react'
import Input from '../../Components/Inputs/Input'
import { useDispatch, useSelector } from 'react-redux';
import '../Forgot.css'
import { backStep, goStep, handleForgotChange, handleLoading } from '../../../../redux/Reducers/ForgotReducer';
import axios from '../../../../api/axios';
import { useStateContext } from '../../../../contexts/ContextProvider';
import Loading from '../../../../components/Loading/Loading';

export default function ForgotEmail() {
    
    const { button, loading, inputs: { email } } = useSelector(state => state.Forgot);
    const { CallToast } = useStateContext()
    const dispatch = useDispatch()
    const handleClick = async() => {
        dispatch(handleLoading())
        try{
            const { data } = await axios.post('/forget',{email})
            if(data){
                dispatch(handleLoading())
                dispatch(goStep())
            }
        }catch({ response : { status } }) {
            if(status === 404) {
                CallToast('Email not found😢');
            }else{
                CallToast('something happend, please try later😢');
            }
            dispatch(handleLoading())
        }
    }
    const handleChangle = e => {
        const { name, value } = e.target;
        dispatch(handleForgotChange({name, value}));
    }
    return loading ? <div className="loading__dev"><Loading /></div> : <div className="forgot__content">
            <div className="forgot__header">
                <span className="forgot__title">Find your Wazoo account</span>
                <p className="small-title">Enter the email, phone number, or username associated with your account to change your password.</p>
            </div>
            <div className="forgot__email__input">
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    change={handleChangle}
                    value={email||''}
                />
            </div>
            <div className="forgot__button">
                <button onClick={handleClick} className={!button ? 'disabled' : ''}>Next</button>
            </div>
        </div>
    
}
