import React, { useState } from 'react'
import moment from 'moment';
import Born from '../../Icons/Born'
import Calendrier from '../../Icons/calendrier'
import defaultProfile from '../../../assets/images/defaultProfile.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard';
import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import useFollow from '../../../hooks/useFollow';
import Loading from '../../Loading/Loading';
import { Skeleton } from '../../Loading/Skeleton/skeleton';
import { MessageIcon } from '../../posts/icons/postIcons';
import { newConversation } from '../../../redux/Reducers/Chat';

export const ProfileInfo = ({ data1 }) => {
  const { pseudo } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const birthday = moment(data1.birthday, "YYYY/MM/DD");
  const joined = moment(data1.created_at, "YYYY/MM/DD");
  const { loggedIn: Auth, user } = useSelector(state => state.Auth)
  const [pofileImg, setProfileImg] = useState({ src: null, from: null })
  const [ImageLoading, setImageLoading] = useState({ pp: true, cover: true })

  const showimg = e => {

    setProfileImg({ from: [e.target.name], src: [e.target.src] })

  }

  const [NotAuth, setnotAuth] = useState(false)
  const [followHim, setfollowHim] = useState(null)

  const { data } = useFetch('followings/' + user?.pseudo)

  useEffect(() => {
    if (data?.data) {
      setfollowHim(data?.data?.some(user => user?.pseudo.substring(1) == pseudo))
    }
  }, [data, data1, pseudo])

  const follow = () => {
    useFollow(followHim, data1.id)
    setfollowHim(!followHim)
  }

  const GoToChat = () => {
    const newUser = {
      "idReceiver": data1?.id,
      "receiver_name": data1?.name,
      "receiver_pseudo": data1?.pseudo,
      "receiver_bio": data1?.bio,
      "receiver_joined": data1?.created_at,
      "receiver_pp": data1?.pp,
      "messages": []
    }
    dispatch(newConversation(newUser))
    navigate('/messages/' + data1?.pseudo)

  }

  return (
    <>
      <div className="profile_images">
        <div className="profile_banner">
          {data1?.cover &&
            <>
              {ImageLoading?.cover && <Skeleton />}
              <div >
                <img src={data1?.cover} name='cover' onLoad={() => { setImageLoading({ ...ImageLoading, cover: false }) }} onClick={showimg} className="img__banner" />
              </div>
            </>
          }
        </div>
        <div className="profile__img">
          <div className="img__profile">
            {ImageLoading?.pp && <Skeleton />}
            <img src={data1.pp ? data1.pp : defaultProfile} onLoad={() => { setTimeout(() => { setImageLoading({ ...ImageLoading, pp: false }) }, 500) }} name='pp' onClick={showimg} />
          </div>
          <div className="profile__actions">
            {(Auth && user?.id != data1?.id) &&
              <div className="iconH" onClick={GoToChat}>
                <MessageIcon />
              </div>
            }
            {Auth && data1.id == user.id && <Link to="edit" className='profile_btn btn-def'>Edit profile</Link>}
            {!Auth && <button className='btn-def btn_follow' onClick={() => setnotAuth(true)}>Follow</button>}
            {
              followHim == null && Auth && data1.id != user.id ?

                <div className='sketlon'>
                  <Skeleton />
                </div> :
                <>
                  {Auth && followHim != null && followHim && data1.id != user.id && <button className='btn-def btn_unfollow' onClick={follow}>Following</button>}
                  {Auth && followHim != null && !followHim && data1.id != user.id && <button className='btn-def btn_follow' onClick={follow}>Follow</button>}

                </>
            }
          </div>
        </div>
      </div>

      <div className="profile__user_content">
        <div className='profile_column'>
          <span className="profile__user_name">{data1.name}</span>
          <span className="profile__user_username">{data1.pseudo}</span>
        </div>

        <div className="profile__bio">
          {data1.bio || ''}
        </div>

        <div className="profile_user_info">
          <div className='profile_row'>
            <div className="profile_icon">
              <Born />
            </div><span>Born {birthday.format("MMMM DD")}</span>
          </div>
          <div className='profile_row'>
            <div className="profile_icon">
              <Calendrier />
            </div><span>Joined {joined.format("MMMM YYYY")}</span>
          </div>
        </div>
        <div className="card__followers">
          <Link to='i/following' className="c_followers underline">
            <span>{data1.followings}</span>
            <span className='username '>Following</span>
          </Link>
          <Link to='i/followers' className="c_followers underline">
            <span>{data1.followers}</span>
            <span className='username '>Followers</span>
          </Link>
        </div>
      </div>

      {pofileImg?.src &&
        <div className='model_img_c' onClick={() => { setProfileImg(null) }}>
          <div className="model_img">
            <img src={pofileImg.src || ''} alt="" onClick={e => e.stopPropagation()} className={pofileImg.from} />
          </div>
        </div>}

      {NotAuth && <NotAuthCard />}
    </>
  )
}
