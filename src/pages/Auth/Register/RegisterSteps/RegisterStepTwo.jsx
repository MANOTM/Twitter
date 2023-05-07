import React from 'react'
import { CheckValidIcon } from '../../../../components/Icons/PasswordIcons'

export default function RegisterStepTwo() {
    return (
        <div className="Register__Steps second__step">
            <div>
                <h2 className='Register__steps__title'>Customize your experience</h2>
            </div>
            <div>
                <span className='second__step__mintitle'>Track where you see Twitter content across the web</span>
                <div className="register__secondStep__chebox">
                    <p className='second__step__parag small-text'>
                    Twitter uses this data to personalize your experience. 
                    This web browsing history will never be stored with your name, email, or phone number.
                    </p>
                    <label htmlFor="checkbox" className="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="checkValid">
                            <CheckValidIcon />
                        </div>
                    </label>
                </div>
            </div>
            <div>
                <p className='small-text second__contact'>By signing up, you agree to our <a target='_blank' href="https://twitter.com/en/tos#new" className="a-link">Terms</a>,{' '}
                    <a target='_blank' href="https://twitter.com/en/privacy" className='a-link'>Privacy Policy</a>, and <a target='_blank' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" className='a-link'>Cookie Use</a>. 
                    Twitter may use your contact information,
                    including your email address and phone number
                    for purposes outlined in our Privacy Policy.{' '}
                    <a target='_blank' href="https://twitter.com/en/privacy" className='a-link'>Learn more</a></p>
            </div>
        </div>
    )
}
