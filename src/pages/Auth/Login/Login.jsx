import React, { useState } from 'react'
import TwitterIcon from '../../../components/icons/TwitterIcon'
import Input from '../../../components/Form/input'
import './Login.css'
import axios from 'axios'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

export default function Login() {
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { User, setUser, setAuth } = useStateContext()

    const HandleSubmit = e => {
        e.preventDefault()
        const url =  {email,password}
        // const { data, error, loading } = useAuth(url)
        // loading && console.log(data);
        // console.log(data);
        axios.post('http://127.0.0.1:8000/api/login', {password,email})
        .then(res => {
            if(res.status === 200) {
                setUser(res.data.data.user)
                // console.log(User);
                setAuth(true)
               navigate('/')
            }
        }).catch(Err => {
            console.log(Err);
        })
    }

    return (
        <div className="login__container form">
            {/* <span className="logo">
                <TwitterIcon fill="#e7e9ea" />
            </span>
            <div className="login__title">
                <span>Sign in to Twitter</span>
            </div>
            <form className="login__form">
                <div className="login__buttons">
                    <button>Sign in with Google</button>
                    <button>Sign in with Apple</button>
                </div>
                <div className="login__line">
                    <span>or</span>
                </div>
                <div className="login__input">
                    <Input 
                        type="email"
                        label="Email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="login__buttons">
                    <button>Next</button>
                    <button className='login__forgot__button'>Forgot password</button>
                </div>
            </form>
            <div className='login__signUp'>
                <span>Don't have an account? <a href="#">Sign up</a></span>
            </div> */}

            
            <div className="login__title">
                <span>Enter your password</span>
            </div>
            <form onSubmit={HandleSubmit} className='login__form'>
                <div className="login__form__inputs">
                    <div className="login__input login__form_last">
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            setValue={setemail}
                        />
                    </div>
                    <div className="login__input login__form_last">
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            value={password}
                            setValue={setpassword}
                        />
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div className="login__buttons form__button">
                    <button type='submit'>Log in</button>
                    <div className='login__form__signUp login__signUp'>
                        <span>Don't have an account? <a href="#">Sign up</a></span>
                    </div>
                </div>
            </form>
        </div>
    )
}
