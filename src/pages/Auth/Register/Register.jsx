import React from 'react'
import AuthModal from '../Components/LoginModal/AuthModal'
import Google from '../../../components/Icons/Google'
import Apple from '../../../components/Icons/Apple'
import FollowBtn from '../../../components/buttons/FollowBtn'
import './Register.css';
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Register() {
    const { SetTitle } = useStateContext();
    SetTitle('Sign up for Twitter')
    return (
        <AuthModal>
            <div>
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
                        <FollowBtn text='Create account' />
                    </div>
                </form>
            </div>
        </AuthModal>
    )
}
