import React, { useEffect } from 'react';
import './AuthModal.css';
import CloseIcon from '../../../../components/Icons/CloseIcon';
import { useStateContext } from '../../../../contexts/ContextProvider';
import TwitterIcon from '../../../../components/icons/TwitterIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EndSteps, Move, MoveBack, MoveToStepOne, handleBackReceiveOff, handleLoading } from '../../../../redux/Reducers/RegisterReducer';
import Arrow from '../../../../components/Icons/Arrow';
import avatar from '../../../../assets/images/avatar_twitter.png';
import FollowBtn from '../../../../components/buttons/FollowBtn';
import { CameraIcon } from '../../../../components/Icons/PasswordIcons';
import { useAuth } from '../../../../hooks/useAuth';
import axios from '../../../../api/axios';
import Cookies from 'js-cookie';
import { LogIn } from '../../../../redux/Reducers/AuthReducer';

export default function LoginModal({ children }) {
    const { pages: { Start, step, Loading }, button: { disabled, receive }, inputs: {
        name, email, password, year, month, day, verify:token}
    } = useSelector(state => state.Register);
    const { setAuthModal, setSteps, CallToast, Mounths } = useStateContext();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleReceiveOff = e => {
        e.stopPropagation()
        if(!receive) return 
        dispatch(handleBackReceiveOff())
    }
    const handleSend = async() => {
        try {
            dispatch(handleBackReceiveOff())
            const { data } = await axios.post('/verifyEmail',{email});
            if(data){
                CallToast(data.message)
            }
        }catch(err) {
            console.log(err);
        }
    }
    const handleCloseModal = () => {
        dispatch(EndSteps())
        setAuthModal(false)
        setSteps(true)
        navigate('/')
    }
    const handleBack = () => {
        dispatch(MoveBack());
    }
    // git can you add this 
    const StoreUser = ({ user, token }) => {
        if(!token) return
        Cookies.set('Auth_token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
        localStorage.setItem('user_info',JSON.stringify(user));
        dispatch(LogIn(user));
        dispatch(EndSteps());
        CallToast('Hello World');
        navigate('/');
    }
    // =================================
    const handleRegister = async() => {
        if(step === 3 && new Date().getFullYear() - parseInt(year) <= 12 ) {
            CallToast("Can't complete your signup right now.")
            return dispatch(MoveToStepOne())
        }
        if(step !== 5) return dispatch(Move())
        // const { data, loading, error } = useAuth('/register',inputs)
        dispatch(handleLoading())
        try{
            let mois;
            Mounths.map((one,index) => {
                if(one.month.substring(0,3) == month.substring(0,3) ) mois = index+1;
            })
            const { data } = await axios.post('/register',
            { name, email, password, birthDay:`${year}-${mois}-${day}`, token:parseInt(token) })
            if(data){
                dispatch(handleLoading())
                StoreUser(data.data)
            } 
        }catch(err){
            dispatch(handleLoading())
            dispatch(MoveBack())
            CallToast('The code you entered is incorrect. Please try again.',5000)
        }
    }
    return (
        // <div className={`overlay ${AuthModal && 'isActive'}`}>
        <div onClick={handleReceiveOff} className={`overlay isActive`}>
            <div className="login__content">
                <div className={`modal__header ${Start && 'steps'}`}>
                    {
                    step > 1
                    ?
                        (
                            step !== 5 && (
                                    <span onClick={handleBack} 
                                        className="modal__close">
                                        <Arrow />
                                    </span>
                                )
                        )
                    :
                        <span onClick={handleCloseModal} 
                            className="modal__close">
                            <CloseIcon />
                        </span> 
                    }
                    {
                        Start && step <= 5
                        ?
                        Loading && <>
                            <span className='Register__steps'>
                                Step { step } of 5
                            </span> 
                            {
                                step <= 5 &&( 
                                        step != 5 ?
                                        <button onClick={handleRegister} className={`Register__next__steps ${disabled && 'disbled'}`}>
                                            Next
                                        </button>
                                        // :
                                        // step > 5 ? 
                                        // <div className="Skip__for__new">
                                        //     <FollowBtn title="Skip for now" noBackground={true} />
                                        // </div>
                                        :
                                        <button onClick={handleRegister} className={`Register__next__steps submitRegister ${disabled && 'disbled'}`}>Sign up</button>
                                )
                            }
                        </>
                        : 
                        <>
                            <span className="modal__logo logo center">
                                <TwitterIcon fill="#e7e9ea" />
                            </span>
                            <span className='empty__header__modal'></span>
                        </>
                    }
                </div>
                <div className="modal__body">
                    { children }
                </div>
                {
                    Loading && (step === 3 || step === 5) && (
                        <p className='small-text step3__paragraph'>
                            By signing up, you agree to the <a target='_blank' className='a-link' href="https://twitter.com/en/tos#new">Terms of Service</a> and <a target='_blank' className='a-link' href="https://twitter.com/en/privacy">Privacy Policy</a>, including <a target='_blank' className='a-link' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <a target='_blank' className='a-link' href="https://twitter.com/en/privacy">Learn more</a>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <a className='a-link' href="#">here</a>.
                        </p>
                    )
                }
                {
                    <div>
                        <div onClick={handleReceiveOff} className={`back__back ${receive && 'active'}`}></div>
                        <div onClick={e => e.stopPropagation()} className={`email__receive popup ${receive && 'active'}`}>
                            <ul className='receive__list'>
                                <li className='title__receive'>Didn't receive email?</li>
                                <li onClick={handleSend} className='hover'>
                                    <span>Resend email</span>
                                </li>
                                <li className='hover'>
                                    <span>Use phone instead</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
