import React from 'react';
import './NewToTwitter.css';
import { useNavigate } from 'react-router-dom';
import Google from '../Icons/Google';
import Apple from '../Icons/Apple';
import PolicyLinks from '../PolicyLinks/PolicyLinks';

export default function NewToTwitter() {
    const naviate = useNavigate()
    return (
        <>
            <div className="NewToTwitter">
                <div className="newtotwitter__form">
                    <header className='new__header'>
                        <span className='new__title'>New to Twitter?</span>
                        <p className='new__parag'>Signup now to get your own personalized timeline!</p>
                    </header>
                    <div className="new__body">
                        <button>
                            <div className="new__icons__sign"><Google /></div>
                            Sign up with google
                        </button>
                        <button>
                            <div className="new__icons__sign apple"><Apple /></div>
                            Sign up with Apple
                        </button>
                        <button onClick={() => naviate('/i/flow/signup')}>Create account</button>
                    </div>
                    <div className="new__footer">
                        <span>By signing up, you agree to the <a href="https://twitter.com/en/tos" target='_blank'>Terms of Service</a> 
                        and <a href="https://twitter.com/en/privacy" target='_blank'>Privacy Policy</a>, including <a target='_blank' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>.</span>
                    </div>
                </div>
                <span className='new__title__footer'>
                    <PolicyLinks /><br />
                    <p> &copy; 2023 Wazoo, Inc. </p>
                </span>
            </div>
        </>
    )
}
