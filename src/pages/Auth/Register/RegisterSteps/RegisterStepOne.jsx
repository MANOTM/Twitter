import React from 'react'
import './RegisterSteps.css';
import Input from '../../Components/Inputs/Input';
import { useStateContext } from '../../../../contexts/ContextProvider';

export default function RegisterStepOne() { 
    const { Mounths } = useStateContext()
    const years = [];
    for (let year = 2023; year >= 1903; year--) {
        years.push(<option key={year} value={year}>{year}</option>);
    }

    return (
        <div className="Register__Steps">
            <div className='Register__steps__title'>
                <span>Create your account</span>
            </div>
            <div className="register__step__inputs">
                <div>
                    <Input
                        label="Name"
                        id="Name"
                        name="name"
                        // change={handleFields}
                    />
                    <span hidden className='register__step__email__error'>What’s your name?</span>
                </div>
                <div>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        // change={handleFields}
                    />
                    <span hidden className='register__step__email__error'>Please enter a valid email.</span>
                </div>
            </div>
            <div className="registed__date__step">
                <span>Date of birth</span>
                <p className='small-text'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                <div className="registed__select__date__step">
                    <select>
                        <option hidden></option>
                        {
                            Mounths.map(one => (
                                <option key={one.month} value={one.month}>{ one.month }</option>
                            ))
                        }
                    </select>
                    <select>
                        <option value="">1</option>
                        <option value="">12</option>
                        <option value="">8</option>
                    </select>
                    <select>
                        { years }
                    </select>
                </div>
            </div>
        </div>
    )
}
