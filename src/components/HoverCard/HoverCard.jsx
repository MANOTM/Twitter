import { Link } from 'react-router-dom' 
import './HoverCard.css'
import VerifyIc from '../Icons/VerifyIc'
import { useStateContext } from '../../contexts/ContextProvider';
import avatar from '../../assets/images/defaultProfile.png';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';
import { Skeleton } from '../Loading/Skeleton/skeleton';
import { useEffect, useState } from 'react';
import useFollow from '../../hooks/useFollow';

function HoverCard({ isIn, setisIn, pseudo }) {
    const { CardHover, setCardHover } = useStateContext();
    const { loading, data } = useFetch('/profile/' + pseudo)
    const { loggedIn: Auth, user } = useSelector(state => state.Auth)
    const [followHim , setFollowHim]=useState(null)
    const following = useFetch('followings/' + user?.pseudo).data
    const followingLoading = useFetch('followings/' + user?.pseudo).loading

    useEffect(()=>{
        if(following?.data){  
            setFollowHim(following?.data?.some(follow=> follow?.pseudo == data?.data?.pseudo));
        }
    },[following])
    const follow = () =>{
        useFollow(followHim, data?.data?.id)
        setFollowHim(!followHim)
    } 
    const MouseIn = () => {
        setCardHover(true)
        setisIn(true)
    }
    const MouseOut = () => {
        setCardHover(false)
        setisIn(false)
    }
    return (
        <div className='hover__card' onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
            {
                !loading ? <><div className="hover__card__header">
                    <Link to={`${data?.data?.pseudo.substring(1)}`} className="avatar big__avatar">
                        <img src={data?.data.pp || avatar} alt="profile__avatar" />
                    </Link>
                    <div>
                        {Auth && <>
                            { followingLoading ? 
                            <div className='sketlon'>
                                <Skeleton />
                            </div>:
                            <>
                                {followHim!==null && followHim && <button className='btn-def btn_unfollow' onClick={follow}  >Following</button>}
                                {followHim!==null && !followHim && <button className='btn-def btn_follow'  onClick={follow}>Follow</button>}
                            </>
                            }
                        </>}  
                    </div>
                </div>
                    <Link to={`${data?.data?.pseudo.substring(1)}`} className="hover__card_user">
                        <span className='name ellipsis underline'>{data?.data.name}
                            <span className="Verify__icon align-center">
                                <VerifyIc fill="#1d9bf0" />
                            </span>
                        </span>
                        <span className='username ellipsis'>{pseudo} </span>
                    </Link>

                    {
                        data?.data.bio && (
                            <div className="hover__card_bio">
                                {(<p> {data?.data.bio} </p>)}
                            </div>
                        )
                    }

                    <div className="card__followers">
                        <Link to={`${pseudo.substring(1)}/i/following`} className="c_followers underline">
                            <span>{data?.data.followings || 0}</span>
                            <span className='username '>Following</span>
                        </Link>
                        <Link to={`${pseudo.substring(1)}/i/followers`} className="c_followers underline">
                            <span>{data?.data.followers || 0}</span>
                            <span className='username '>Followers</span>
                        </Link>
                    </div>
                </>
                    :
                    <Loading />
            }
        </div>
    )
}

export default HoverCard
