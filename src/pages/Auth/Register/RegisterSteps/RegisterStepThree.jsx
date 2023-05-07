import React from 'react'
import './RegisterSteps.css';
import Input from '../../Components/Inputs/Input';
import { useSelector } from 'react-redux';

export default function RegisterStepOne() { 
    const { inputs: { name, email, year, month, day } } = useSelector(state => state.Register);

    return (
        <div className="Register__Steps Thered__Step">
            <div className='Register__steps__title'>
                <span>Create your account</span>
            </div>
            <div className="register__step__inputs">
                <div>
                    <Input
                        label="Name"
                        id="Name"
                        name="name"
                        value={name}
                        valid={true}
                        />
                </div>
                <div>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        value={email}
                        valid={true}
                        />
                </div>
                <div>
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
