import React from 'react'
import './PorfileNotFound.css';
import Main from '../../../layouts/Main'
import HeadMain from '../../../components/HeadMain/HeadMain'
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function PorfileNotFound() {
    const { SetTitle } = useStateContext();
    SetTitle('Profile')
    const { pseudo } = useParams()
    const { loading, data } = useFetch('/')
    
    return <Main>
        <div className='profile__not__found'>
            <HeadMain />
            <div className="profile__content">
                <div className="profile__cover_not"></div>
                <div className="profile__avatar_not"></div>
            </div>
            <div className="profile__body__not">
                <span>@{ pseudo } </span>
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
