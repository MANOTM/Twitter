import React from 'react';
import './AuthModal.css';
import CloseIcon from '../../../../components/Icons/CloseIcon';
import { useStateContext } from '../../../../contexts/ContextProvider';
import TwitterIcon from '../../../../components/icons/TwitterIcon';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ children }) {
    const { setAuthModal, setSteps } = useStateContext();
    const navigate = useNavigate()
    const handleCloseModal = () => {
        setAuthModal(false)
        setSteps(true)
        navigate('/')
    }
    return (
        // <div className={`overlay ${AuthModal && 'isActive'}`}>
        <div className={`overlay isActive`}>
            <div className="login__content">
                <div className="modal__header">
                    <span onClick={handleCloseModal} 
                        className="modal__close">
                        <CloseIcon />
                    </span>
                    <span className="modal__logo logo">
                        <TwitterIcon fill="#e7e9ea" />
                    </span>
                    <span className='empty__header__modal'></span>
                </div>
                <div className="modal__body">
                    { children }
                </div>
            </div>
        </div>
    )
}
