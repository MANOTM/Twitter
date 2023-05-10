import { useNavigate } from 'react-router-dom'
import Back from '../../Icons/Back'
import './ProfileHead.css'

export const ProfileHead = ({name,tweetCount}) => {
    const navigator=useNavigate()
  return (
    <div className='profile__head'>
        <div className="iconH" onClick={()=>navigator(-1)}>
            <Back/>
        </div>
        <div className="profile__head_text">
            <span className='profile__head_name'>{name || 'Profile'}</span>
            <span className='profile__head_tweetC'>{tweetCount ? tweetCount+' tweets':''}</span>
        </div>
    </div>
  )
}
