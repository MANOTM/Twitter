import { useState } from 'react'
import CloseIcon from '../Icons/CloseIcon'
import './NotAuthCard.css'
import TwitterIcon from '../Icons/TwitterIcon'
import { Link } from 'react-router-dom'
import Like from './Icons/Like'
import Retweet from './Icons/Retweet'
import Reply from './Icons/Reply'

export const NotAuthCard = ({title,paragraph,action,haveState,hide}) => {
    const [Show, setShow] = useState(true)
  return (
    <div className='new__chat__container' hidden={ haveState ? !haveState: !Show} onClick={()=>haveState? hide(false) :setShow(false)}>
        <div className="NotAuthCard" onClick={e=>{e.stopPropagation()}}>
            <div className="not__auth_header">
                <span className='iconH' onClick={()=>haveState? hide(false) :setShow(false)}><CloseIcon /></span>
            </div>
            <div className="not_auth_content">
                <div className="not__auth_action">
                    {!action && <TwitterIcon fill='rgb(214, 217, 219)'/>} 
                    {action == 'like' ? <Like fill="rgb(249, 24, 128)"/>:''}
                    {action == 'retweet' ? <Retweet fill="rgb(0, 186, 124)" /> :''}
                    {action == 'reply' ? <Reply fill="rgb(29, 155, 240)"/>:''}
                </div>
                <div className="not__auth_info">
                    <span className='not__auth_title'> {title || 'Don’t miss what’s happening'}</span>
                    <span className='not__auth_p'>{paragraph || 'People on Twitter are the first to know.'}</span>
                </div>
                <div className="not__auth">
                    <Link to='/i/flow/login' className='not_login'>Log in</Link>
                    <Link to='/i/flow/signup'>Sign up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
