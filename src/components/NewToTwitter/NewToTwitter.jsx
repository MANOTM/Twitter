import React from 'react';
import './NewToTwitter.css';
import { Navigate } from 'react-router-dom';

export default function NewToTwitter() {
    return (
        <>
            <div className="NewToTwitter">
                <div className="newtotwitter__form">
                    <header className='new__header'>
                        <span className='new__title'>New to Twitter?</span>
                        <p className='new__parag'>Signup now to get your own personalized timeline!</p>
                    </header>
                    <div className="new__body">
                        <button>Sign up with google</button>
                        <button>Sign up with Apple</button>
                        <button onClick={() => Navigate('/register')}>Create account</button>
                    </div>
                    <div className="new__footer">
                        <span>By signing up, you agree to the <a href="https://twitter.com/en/tos" target='_blank'>Terms of Service</a> 
                        and <a href="https://twitter.com/en/privacy" target='_blank'>Privacy Policy</a>, including <a target='_blank' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>.</span>
                    </div>
                </div>
                <span className='new__title__footer'>
                    <div className="new_links">
                        <a target='_blank' href="https://twitter.com/en/tos">Terms of Service</a>
                        <a target='_blank' href="https://twitter.com/en/privacy">Privacy Policy</a>
                        <a target='_blank' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Policy</a>
                        <a target='_blank' href="https://help.twitter.com/en/resources/accessibility">Accessibility</a>
                        <a target='_blank' href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Ads info</a>
                        <a>More...</a>
                    </div><br />
                    <p> &copy; 2023 Twitter, Inc. </p>
                </span>
            </div>
        </>
    )
}
