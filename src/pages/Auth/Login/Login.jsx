import React, { useState } from 'react'
import Input from '../Components/Inputs/Input'
import './Login.css'
import axios from '../../../api/axios'
import { useStateContext } from '../../../contexts/ContextProvider'
import Loading from '../../../components/Loading/Loading'
import Cookies from 'js-cookie'
import AuthModal from '../Components/LoginModal/AuthModal'
import { connect, useDispatch } from 'react-redux'
import { LogIn } from '../../../redux/Reducers/AuthReducer'
import Google from '../../../components/Icons/Google'
import Apple from '../../../components/Icons/Apple'

function Login() {
    const { SetTitle } = useStateContext();
    SetTitle('Log in to Twitter')
    const [field, setField] = useState({ email:'', password:'' })
    const { steps, setSteps, CallToast } = useStateContext()
    const dispatch = useDispatch()
    const [Loadingform, setLoading] = useState(false)
    const handleFields = e => {
        const { name, value } = e.target;
        setField({ ...field, [name] : value })
    }
    const handleSteps = () => setSteps(false);
    const HandleSubmit = async e => {
        e.preventDefault()
        try{
            setLoading(true)
            const { data } = await axios.post('/login',field)
            if(data) {
                setLoading(false)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;
                Cookies.set("Auth_token",data.data.token);
                localStorage.setItem('pss', data.data.user.pseudo);
                dispatch(LogIn(data.data.user));
                CallToast(data.message);
            }
        } catch(e){
            setLoading(false);
            CallToast('Sorry, something happened, please try later.');
        }
        setField({...field, password:''});
    }

    return (
        <AuthModal>
            <div className={`login__container ${steps && 'step'} `}>
            {
                Loadingform ? <Loading /> : <>
                <div className={`FirstStep`} hidden={!steps}>
                    <div className="login__title">
                        <span>Sign in to Twitter</span>
                    </div>
                    <form className="login__form">
                        <div className="login__buttons">
                            <button>
                                <div className="new__icons__sign"><Google /></div>
                                Sign in with Google
                            </button>
                            <button>
                                <div className="new__icons__sign apple"><Apple /></div>
                                Sign in with Apple
                            </button>
                        </div>
                        <div className="login__line">
                            <div></div>
                            <span>or</span>
                            <div></div>
                        </div>
                        <div className="login__input">
                            <Input
                                type="email"
                                label="Email"
                                id="CheckEmail"
                                name="email"
                                change={handleFields}
                            />
                        </div>
                        <div className="login__buttons down">
                            <button onClick={handleSteps} type='button'>Next</button>
                            <button className='login__forgot__button'>Forgot password</button>
                        </div>
                    </form>
                    <div className='login__signUp'>
                        <span>Don't have an account? <a href="/register">Sign up</a></span>
                    </div>
                </div>
                <div className="secondStep" hidden={steps}>
                    <div className="login__title">
                        <span>Enter your password</span>
                    </div>
                    <form onSubmit={HandleSubmit} className='login__form'>
                        <div className="login__form__inputs">
                            <div className="login__input login__form_last">
                                <Input
                                    className="disbled"
                                    readonly={false}
                                    type="email"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={field.email}
                                />
                            </div>
                            <div className="login__input login__form_last">
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={field.password}
                                    change={handleFields}
                                    icon={true}
                                />
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <div className="login__buttons form__button">
                            <button type='submit' className={!field.password.length ? 'login__disabled__button' : ''}>Log in</button>
                            <div className='login__form__signUp login__signUp'>
                                <span>Don't have an account? <a href="#">Sign up</a></span>
                            </div>
                        </div>
                    </form>
                </div></>
                }
            </div>
        </AuthModal>
    )
}


const  mapDispatchToProps = dispatch => {
    return {
        setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    }
}

export default connect( null, mapDispatchToProps )(Login);