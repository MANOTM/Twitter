import React, { useState } from 'react'
import './RegisterSteps.css';
import Input from '../../Components/Inputs/Input';
import { useStateContext } from '../../../../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { EmailNotValid, EmailValid, HandleStepsButton, handleSetValue } from '../../../../redux/Reducers/RegisterReducer';
import axios from '../../../../api/axios';
import { SelectIcon } from '../../../../components/Icons/PostIcons';
import { debounce } from 'lodash';

export default function RegisterStepOne() { 
    const dispatch = useDispatch();
    const { inputs: { name, email, year, month, day } } = useSelector(state => state.Register);
    const { Mounths, CallToast } = useStateContext();
    const [error, setError] = useState({});
    const currentYear = new Date().getFullYear();
    const [days, setDays] = useState(30)
    const dayOfMonth = [];
    for(let day = 1; day <= days; day++){
        dayOfMonth.push(<option key={day} value={day}>{day}</option>)
    }
    const years = [];
    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(<option key={year} value={year}>{year}</option>);
    }
    const useCheck = async email => {
        try{
            const { data } = await axios.post('/verifyEmail',{email});
            if(data){
                dispatch(EmailValid());
            } 
            setError(prev => ({...prev, email:null}))
        }catch({ response: { status } }) {
            dispatch(EmailNotValid())
            if(status === 403) setError(prev => ({...prev, email:'Email has already been taken.'}))
        }
    }
    const debouncedVerification = debounce(useCheck, 500);
    const handleChange = e => {
        const { name, value, id } = e.target 
        if(name === 'month') setDays(e.target.options[e.target.selectedIndex].getAttribute('id'));
        dispatch(handleSetValue({name, value}))
        const emailRegex =  /^[^\s@]+@[^\s@]+\.(com|net|ma)$/i;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // name error
        if(name === 'name' && value === ''){
            setError(prev => ({...prev, name:'What’s your name?'}));
        }else if(name === 'name' && value !== '') {
            setError(prev => ({...prev, name:null}));
        }
        //email error
        if(name === 'email') {
            dispatch(EmailNotValid())
        }
        if(name === 'email' && emailRegex.test(value)){
            debouncedVerification(value)
            setError(prev => ({...prev, email:null}))
        }else if(name === 'email' && value !== '' && !emailRegex.test(value)){
            setError(prev => ({...prev, email:'Please enter a valid email.'}));
        }else if(name === 'email' && value === '') {
            setError(prev => ({...prev, email:null}));
        }
    }

    return (
        <div className="Register__Steps">
            <div className='Register__steps__title'>
                <span>Create your account</span>
            </div>
            <div className="register__step__inputs">
                <div className={error.name ? 'error' : ''}>
                    <Input
                        label="Name"
                        id="Name"
                        name="name"
                        change={handleChange}
                        value={name}
                    />
                    <span className='register__step__email__error'> { error.name } </span>
                </div>
                <div className={error.email ? 'error' : ''}>
                    <Input
                        label="Email"
                        id="email"
                        name="email"
                        change={handleChange}
                        value={email}
                    />
                    <span className='register__step__email__error'> { error.email } </span>
                </div>
            </div>
            <div className="registed__date__step">
                <span>Date of birth</span>
                <p className='small-text'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                <div className="registed__select__date__step">
                    <div className="select__option">
                        <label htmlFor="month" className="select__label">Month</label>
                        <select id='month' defaultValue={month} name='month' onChange={handleChange}>
                            <option hidden></option>
                            {
                                Mounths.map(one => (
                                    <option key={one.month} id={one.days} value={one.month}>{ one.month }</option>
                                ))
                            }
                        </select>
                        <div className="select__icon">
                            <SelectIcon />
                        </div>
                    </div>
                    <div className="select__option day">
                        <label htmlFor="day" className="select__label">Day</label>
                        <select defaultValue={day} id='day' name='day' onChange={handleChange}>
                            <option hidden></option>
                            { dayOfMonth }
                        </select>
                        <div className="select__icon">
                            <SelectIcon />
                        </div>
                    </div>
                    <div className="select__option year">
                        <label htmlFor="year" className="select__label">Year</label>
                        <select defaultValue={year} id='year' name='year' onChange={handleChange}>
                            <option hidden></option>
                            { years }
                        </select>
                        <div className="select__icon">
                            <SelectIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
