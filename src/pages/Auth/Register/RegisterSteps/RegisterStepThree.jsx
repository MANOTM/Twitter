import React from 'react'
import './RegisterSteps.css';
import Input from '../../Components/Inputs/Input';

export default function RegisterStepOne() { 

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
                        value="yassine adiouani"
                        valid={true}
                        />
                </div>
                <div>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        value="yassinediwani444@gmail.com"
                        valid={true}
                        />
                </div>
                <div>
                    <Input
                        label="Date of birth"
                        id="email"
                        name="date"
                        value="August 08, 2002"
                        valid={true}
                    />
                </div>
            </div>
        </div>
    )
}
