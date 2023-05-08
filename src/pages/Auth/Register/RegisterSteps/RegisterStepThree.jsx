import React from 'react'
import './RegisterSteps.css';
import Input from '../../Components/Inputs/Input';
import { useDispatch, useSelector } from 'react-redux';
import { MoveToStepOne } from '../../../../redux/Reducers/RegisterReducer';

export default function RegisterStepOne() { 
    const { inputs: { name, email, year, month, day } } = useSelector(state => state.Register);
    const dispatch = useDispatch()
    const handleStepThree = () => dispatch(MoveToStepOne())

    return (
        <div className="Register__Steps Thered__Step">
            <div className='Register__steps__title'>
                <span>Create your account</span>
            </div>
            <div className="register__step__inputs">
                <div onClick={handleStepThree}>
                    <Input
                        label="Name"
                        id="Name"
                        name="name"
                        value={name}
                        valid={true}
                        />
                </div>
                <div onClick={handleStepThree}>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        value={email}
                        valid={true}
                        />
                </div>
                <div onClick={handleStepThree}>
                    <Input
                        label="Date of birth"
                        id="email"
                        name="date"
                        value={`${month.substring(0,3)} ${day}, ${year}`}
                        valid={true}
                    />
                </div>
            </div>
        </div>
    )
}
