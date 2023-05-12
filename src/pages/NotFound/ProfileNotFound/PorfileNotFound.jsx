import React from 'react'
import './PorfileNotFound.css';
import Main from '../../../layouts/Main'
import { useParams } from 'react-router-dom'; 
import { useStateContext } from '../../../contexts/ContextProvider'; 
import { ProfileHead } from '../../../components/ProfileComponent/ProfileHead/ProfileHead';

export default function PorfileNotFound() {
    const { SetTitle } = useStateContext();
    SetTitle('Profile')
    const { pseudo } = useParams() 
    
    return <Main>
        <div className='profile__not__found'>
            <ProfileHead />
            <div className="profile__content">
                <div className="profile__cover_not"></div>
                <div className="profile__avatar_not"></div>
            </div>
            <div className="profile__body__not">
                <span>{ pseudo } </span>
            </div>
            <div className="profile__post__not">
                <div>
                    <span>This account doesn’t exist</span>
                    <p className='small-text'>Try searching for another.</p>
                </div>
            </div>
        </div>
    </Main> 
}
