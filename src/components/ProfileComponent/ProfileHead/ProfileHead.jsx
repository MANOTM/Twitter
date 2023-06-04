import { useNavigate } from 'react-router-dom'
import Back from '../../Icons/Back'
import './ProfileHead.css'
import { useStateContext } from '../../../contexts/ContextProvider'

export const ProfileHead = ({name}) => {
  const { HeadingCount }= useStateContext()
    const navigator=useNavigate()
  return (
    <div className='profile__head'>
        <div className="iconH" onClick={()=>navigator(-1)}>
            <Back/>
        </div>
        <div className="profile__head_text">
            <span className='profile__head_name'>{name || 'Profile'}</span>
            <span className='profile__head_tweetC'>{HeadingCount || ''}</span>
        </div>
    </div>
  )
}
