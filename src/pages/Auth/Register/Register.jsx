import React from 'react'
import AuthModal from '../Components/LoginModal/AuthModal'
import './Register.css';
import { useStateContext } from '../../../contexts/ContextProvider'
import RegisterHome from './RegisterHome/RegisterHome'
import { useSelector } from 'react-redux';
import RegisterStepOne from './RegisterSteps/RegisterStepOne';
import { useState } from 'react';
import RegisterStepTwo from './RegisterSteps/RegisterStepTwo';
import RegisterStepThree from './RegisterSteps/RegisterStepThree';
import RegisterStepFour from './RegisterSteps/RegisterStepFour';
import RegisterStepFive from './RegisterSteps/RegisterStepFive';

export default function Register() {
    const { SetTitle } = useStateContext();
    SetTitle('Sign up for Wazoo')
    const { pages: {step, Start} } = useSelector(state => state.Register)
    const [Feilds, setFeilds] = useState()
    let Content;
    switch (step){
        case 1:
            Content = <RegisterStepOne setFeilds={setFeilds} />
            break;
        case 2:
            Content = <RegisterStepTwo />
            break;
        case 3:
            Content = <RegisterStepThree />
            break;
        case 4:
            Content = <RegisterStepFour />
            break;
        case 5:
            Content = <RegisterStepFive /> ;
            break;
        default:
            Content = <RegisterHome />
            break;
    }

    return (
        <AuthModal>
            { Content }
        </AuthModal>
    )
}
