import React from 'react';
import './AuthModal.css';
import CloseIcon from '../../../../components/Icons/CloseIcon';
import { useStateContext } from '../../../../contexts/ContextProvider';
import TwitterIcon from '../../../../components/icons/TwitterIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EndSteps, Move, MoveBack } from '../../../../redux/Reducers/RegisterReducer';
import Arrow from '../../../../components/Icons/Arrow';
import avatar from '../../../../assets/images/avatar_twitter.png';
import FollowBtn from '../../../../components/buttons/FollowBtn';
import { CameraIcon } from '../../../../components/Icons/PasswordIcons';

export default function LoginModal({ children }) {
    const { pages: { Start, step } } = useSelector(state => state.Register);
    const { setAuthModal, setSteps } = useStateContext();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(EndSteps())
        setAuthModal(false)
        setSteps(true)
        navigate('/')
    }
    const handleBack = () => {
        dispatch(MoveBack());
    }
    return (
        // <div className={`overlay ${AuthModal && 'isActive'}`}>
        <div className={`overlay isActive`}>
            <div className="login__content">
                <div className={`modal__header ${Start && 'steps'}`}>
                    {
                    step > 1
                    ?
                        (
                            <span onClick={handleBack} 
                                className="modal__close">
                                <Arrow />
                            </span>)
                    :
                        <span onClick={handleCloseModal} 
                            className="modal__close">
                            <CloseIcon />
                        </span> 
                    }
                    {
                        Start && step <= 5
                        ?
                        <>
                            <span className='Register__steps'>
                                Step { step } of 5
                            </span> 
                            {
                                step <= 5 &&( 
                                        step != 5 ?
                                        <button onClick={()=>dispatch(Move())} className='Register__next__steps'>
                                            Next
                                        </button>
                                        :
                                        step > 5 ? 
                                        <div className="Skip__for__new">
                                            <FollowBtn title="Skip for now" noBackground={true} />
                                        </div>
                                        :
                                        <button onClick={()=>dispatch(Move())} className='Register__next__steps submitRegister'>Sign up</button>
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
                    step === 3 && (
                        <p className='small-text step3__paragraph'>
                            By signing up, you agree to the <a target='_blank' className='a-link' href="https://twitter.com/en/tos#new">Terms of Service</a> and <a target='_blank' className='a-link' href="https://twitter.com/en/privacy">Privacy Policy</a>, including <a target='_blank' className='a-link' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <a target='_blank' className='a-link' href="https://twitter.com/en/privacy">Learn more</a>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <a className='a-link' href="#">here</a>.
                        </p>
                    )
                }
            </div>
        </div>
    )
}
