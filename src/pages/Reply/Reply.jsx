import React, { useState } from 'react'
import './Reply.css'
import Main from '../../layouts/Main'
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import Tweet from '../../components/posts/Tweets/Tweet'
import avatar from '../../assets/images/defaultProfile.png'; 
import Map from '../Home/icons/Map'
import Gif from '../Home/icons/Gif'
import Emojis from '../Home/icons/Emojis'
import { ReplyItem } from './Component/ReplyItem'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function Reply() {

    // hello my friend if u find any issue try to fix it ,may get some hassanat

    const TweetTest = { comments: 0, created_at: "2023-05-21T13:34:17.000000Z", description: "Surely Allah never fails in His promise #Quran", email: "otmaneolmansouri1@gmail.com", id: 1, idUser: 6, image: 'https://pbs.twimg.com/media/FwlYVWiaEAEB7K8?format=jpg&name=small', likes: 1, name: "mansouri otmane", pp: "http://localhost:8000/images/@mansouri-otmane6/pp/ShOkMU93PXSYXsZ6SxyilBMIAJselOjSw95E99d6.jpg", pseudo: "@mansouri-otmane6", video: null }
    const [ReplyText,setReplyText]=useState('')
    return (
        <Main>
            <div className='reply__'>
                <ProfileHead name='Tweet' />
                <Tweet tweet={TweetTest} />
                <div className="create__home">
                    <div className="create__Avatar">
                        <div className="tweet__avatar__user">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className="create__right">
                        <div className="create__input">
                            <input type="text" value={ReplyText} onChange={e=>setReplyText(e.target.value)} placeholder="Tweet your reply!" name="description" />
                        </div>

                        <div className="createTweet__footer">
                            <div className="createTweet__actions">
                                <div className="createTweet__buttons__withImoji">
                                    <span className='center cur-none' title='GIF'><Gif /></span>
                                    <span className='center' title='Emoji'><Emojis /></span>
                                    <span className='center' title='Map'><Map /></span>
                                </div>
                                <div className='createTweet__Tweet__button disabled'>
                                    <button>Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="replys">
                    <ReplyItem/>
                    <ReplyItem/>
                    <ReplyItem/>
                    <ReplyItem/>
                </div>
            </div>
        </Main>
    )
}
