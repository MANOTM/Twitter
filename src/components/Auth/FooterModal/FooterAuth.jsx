import React from 'react';
import './FooterAuth.css';
import { useStateContext } from '../../../contexts/ContextProvider';

function FooterAuth() {
    const { setAuthModal } = useStateContext();
    const { setRegisterModal } = useStateContext();

    return (
        <div className="modal">
            <div className="modal__content">
                <span className="modal__sidebar"></span>
                <div className="modal_body">
                    <div className="modal__message">
                        <span className="modal__title">
                            Don’t miss what’s happening
                        </span>
                        <p>
                            People on Twitter are the first to know.
                        </p>
                    </div>
                    <div className="modal__buttons">
                        <button onClick={() => setAuthModal(true)} className='modal__button'>Log in</button>
                        <button onClick={() => setRegisterModal(true) } >Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterAuth