import React from 'react'
import Main from '../../layouts/Main'
import FollowBtn from '../../components/buttons/FollowBtn'
import './NotFound.css';

export default function NotFound() {
    return (
        <Main> 
            <div className="page__not__found__section center">
                <div className='title__page__not__found'>
                    <p className='small-text'>Hmm...this page doesn’t exist. Try searching for something else.</p>
                </div>
                <div className="button__page__not__found">
                    <FollowBtn title={"Search"} />
                </div>
            </div>
        </Main> 
    )
}
