import React from 'react';
import './AuthModal.css';
import CloseIcon from '../../../../components/Icons/CloseIcon';
import { useStateContext } from '../../../../contexts/ContextProvider';
import TwitterIcon from '../../../../components/icons/TwitterIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EndSteps } from '../../../../redux/Reducers/RegisterReducer';

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
    return (
        // <div className={`overlay ${AuthModal && 'isActive'}`}>
        <div className={`overlay isActive`}>
            <div className="login__content">
                <div className={`modal__header ${Start && 'steps'}`}>
                    <span onClick={handleCloseModal} 
                        className="modal__close">
                        <CloseIcon />
                    </span>
                    {
                        Start
                        ?
                        <>
                            <span className='Register__steps'>
                                Step { step } of 5
                            </span> 
                            <button className='Register__next__steps disbled'>
                                Next
                            </button>
                        </>
                        : 
                        <>
                            <span className="modal__logo logo">
                                <TwitterIcon fill="#e7e9ea" />
                            </span>
                            <span className='empty__header__modal'></span>
                        </>
                    }
                </div>
                <div className="modal__body">
                    { children }
                </div>
            </div>
        </div>
    )
}
