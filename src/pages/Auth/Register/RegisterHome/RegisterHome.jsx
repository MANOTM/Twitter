import React from 'react'
import Google from '../../../../components/Icons/Google'
import Apple from '../../../../components/Icons/Apple'
import { useDispatch } from 'react-redux'
import { StartSteps } from '../../../../redux/Reducers/RegisterReducer'

export default function RegisterHome() {

    const dispatch = useDispatch()

    const handleStepsStart = () => {
        dispatch(StartSteps())
    }

    return (
        <div className="register__section">
            <span className="register__first__title">Join Wazoo today</span>
            <div className="register__first__buttons">
                <button><Google />
                    Sign up with Google</button>
                <button><Apple />
                    Sign up with Apple</button>
            </div>
            <div className="register__line">
                <div></div>
                <span>or</span>
                <div></div>
            </div>
            <div className="register__first__Create">
                <button onClick={handleStepsStart}>
                    Create account</button>
                <p className='small-text'>By signing up, you agree to the <a target='_blank' className='a-link' href="https://twitter.com/en/tos">Terms of Service</a> and
                    <a target='_blank' className='a-link' href="https://twitter.com/en/privacy">Privacy Policy</a>, including <a target='_blank' className='a-link' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>.</p>
            </div>
            <div className="register__first__login small-text">Have an account already? {' '}
            <a className='a-link' href="/i/flow/login">Log in</a></div>
        </div>
    )
}
