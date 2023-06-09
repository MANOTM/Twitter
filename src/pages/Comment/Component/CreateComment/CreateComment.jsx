import React from 'react'
import { useState } from 'react'
import avatar from '../../../../assets/images/defaultProfile.png'; 
import Gif from '../../../Home/icons/Gif';
import Emojis from '../../../Home/icons/Emojis';
import Map from '../../../Home/icons/Map';
import axios from '../../../../api/axios';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useStateContext } from '../../../../contexts/ContextProvider';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { GetComment } from '../../../../redux/Reducers/CommentReducer';
import { GetReply } from '../../../../redux/Reducers/ReplyReducer';

export default function CreateComment({ idTweet, idComment, idUser }) {
    
    const [ReplyText,setReplyText]=useState('');
    const [ShowingEmoji, setShowingEmoji] = useState(false)
    const InputElement = useRef();
    const { CallToast, showErrorFunction } = useStateContext();
    const dispatch = useDispatch()

    const handleComment = e => {
        e.preventDefault()
        if(!ReplyText.trim()) return
        setReplyText('');
        const prefix = idComment ? ('replies/create/'+idComment) : ('/comments/create/'+idTweet)
        const objet = idComment ? { replyBody: ReplyText } : { body: ReplyText }
        axios
        .post(prefix,objet)
        .then(res => {
            !idComment ? dispatch(GetComment(idTweet,idUser)) : dispatch(GetReply(idComment))
            CallToast(res?.data?.message,2500);
        })
        .catch(err => {
            showErrorFunction()
        })
    }

    const EmojiSelect=e=>{
        setReplyText(ReplyText+e.native)   
        InputElement.current.focus()
    }

    return <div className="create__home">
        <div className="create__Avatar">
            <div className="tweet__avatar__user">
                <img src={avatar} />
            </div>
        </div>
        <form className="create__right" onSubmit={handleComment}>
            <div className="create__input">
                <input autoComplete="off" type="text" ref={InputElement} value={ReplyText} onChange={e=>setReplyText(e.target.value)} placeholder="Tweet your reply!" name="description" />
            </div>

            <div className="createTweet__footer">
                <div className="createTweet__actions">
                    <div className="createTweet__buttons__withImoji">
                        <span className='center cur-none' title='GIF'><Gif /></span>
                        <span className='center' onClick={()=>setShowingEmoji(!ShowingEmoji)} title='Emoji'><Emojis /></span>
                        <span className='center' title='Map'><Map /></span>
                    </div>
                    <div className={`createTweet__Tweet__button ${!ReplyText.trim() && 'disabled'}`}>
                        <button>Reply</button>
                    </div>
                </div>
                <div className='emoji_div' hidden={!ShowingEmoji} onClick={()=>setShowingEmoji(!ShowingEmoji)}>
                    <div className="stoPro emoji_position" onClick={e=>{e.stopPropagation()}}>
                    <Picker data={data} onEmojiSelect={
                    e=>{EmojiSelect(e)}
                    } />
                    </div>
                </div>
            </div>
        </form>
    </div>
}
