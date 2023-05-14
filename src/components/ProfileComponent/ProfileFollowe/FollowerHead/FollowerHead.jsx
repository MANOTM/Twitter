import { NavLink, useNavigate, useParams } from 'react-router-dom'
import './FollowerHead.css'
import Back from '../../../Icons/Back'
import useFetch from '../../../../hooks/useFetch'

export const FollowerHead = ({user}) => {
    const navigator = useNavigate()
    return ( 
        <div className='profile__head_big'>
            <div className="profile__head_user">
                <div className="iconH" onClick={() => navigator('/'+user?.pseudo.substring(1))}>
                    <Back />
                </div>
                <div className="profile__head_text">
                    <span className='profile__head_name'>{user?.name}</span>
                    <span className='profile__head_tweetC'>{user?.pseudo}</span>
                </div>
            </div>
            <div className="profile_head_liks">
                <NavLink to={`/${user?.pseudo.substring(1)}/i/followers`}>Followers</NavLink>
                <NavLink to={`/${user?.pseudo.substring(1)}/i/following`}>Following</NavLink>
            </div>
        </div> 
    )
}
