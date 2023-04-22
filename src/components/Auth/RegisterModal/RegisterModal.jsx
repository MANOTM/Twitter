import React from 'react';
import CloseIcon from '../../Icons/CloseIcon';
import './RegisterModal.css';
import { useStateContext } from '../../../contexts/ContextProvider';
import Register from '../../../pages/Auth/Register/Register';

export default function RegisterModal() {
    const { RegisterModal, setRegisterModal } = useStateContext();
    return (
        <div className={RegisterModal ? "overlay  isActive" : 'overlay'}>
            <div className="login__content">
                <span onClick={() => setRegisterModal(false)} 
                    className="modal__close">
                    <CloseIcon />
                </span>
                <div className="modal__body">
                    <Register />
                </div>
            </div>
        </div>
    )
}
