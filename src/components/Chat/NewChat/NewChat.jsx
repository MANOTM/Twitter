import { useState } from 'react'
import CloseIcon from '../../Icons/CloseIcon'
import GroupIcon from '../../Icons/GroupIcon'
import SearchIcon from '../../Icons/SearchIcon'
import './NewChat.css'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../Loading/Loading'
import avatar from '../../../assets/images/defaultProfile.png'
import axios from '../../../api/axios'
import { newConversation } from '../../../redux/Reducers/Chat'
import { useLocation, useNavigate } from 'react-router-dom'

export const NewChat = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const path = useLocation().pathname.includes('messages'); 
    const { ShowingCard, setShowingCard ,handelChat} = useStateContext()
    const { loggedIn: Auth, user } = useSelector(state => state.Auth)

    // get following of user
    const following = useFetch('followings/' + user?.pseudo).data
    const loading2 = useFetch('followings/' + user?.pseudo).loading;

    //user selected
    const [userSelect, setUserSelect] = useState(null)
    const next = () => { 
        const newUser = {
            "idReceiver": userSelect?.idUser,
            "receiver_name": userSelect?.name,
            "receiver_pseudo": userSelect?.pseudo,
            "receiver_bio": null,
            "receiver_joined":null,
            "receiver_pp": userSelect?.image,
            "messages": []
        }
        dispatch(newConversation(newUser))
        setShowingCard(false)
        handelChat(newUser) 
        path && navigate('/messages/'+userSelect?.pseudo)
        
    }
    //search logic

    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setloading(true)
        const search = () => {
            axios.get('search/' + value)
                .then(function (response) {
                    setData(response.data?.data)
                    setUserSelect(null)
                    setloading(false)
                })
                .catch(function (error) {
                    setloading(false)
                    setData([])
                });
        }
        const timeOut = setTimeout(() => {
            if (value) {
                search()
            }
        }, 1000)

        return () => { clearTimeout(timeOut) }
    }, [value])


    return (
        <div className='new__chat__container' hidden={!ShowingCard} onClick={() => setShowingCard(false)}>
            <div className="new__chat scroll" onClick={e => { e.stopPropagation() }}>
                <div className="boite__m__header cursor_auto">
                    <div className={`boite__header__info op1}`}>
                        <span className='iconH' onClick={() => setShowingCard(false)}><CloseIcon /></span>
                        <div className="boite_header__user">
                            <span className='boite__header__title'>New message</span>
                        </div>
                    </div>
                    <div className="boite__header__actions">
                        <button className={`next_btn ${userSelect || 'op5'}`} onClick={next}>Next</button>
                    </div>
                </div>

                <div className="new_chat_content">
                    <div className={`new_chat_input ${loading && value && 'loadingLine'}`}>
                        <SearchIcon fill="#71767b" />
                        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Search people" id="" />
                    </div>

                    {/* <div className="new_grp hover">
                        <div className="new_grp_icon">
                            <GroupIcon />
                        </div>
                        <span className='new_grp_text '>
                            Create a group
                        </span>
                    </div> */}
                    {
                        loading2 ? <Loading /> :
                            <>
                                {value ?
                                    <>
                                        {data.length ? data.map(item => {
                                            if (user?.pseudo == item.pseudo) return
                                            return <div key={item.idUser} className={`new_chat_user ${item?.pseudo == userSelect?.pseudo ? 'fixhover' : 'hover'}`} onClick={() => setUserSelect(item)}>
                                                <div className="new_chat_avatar">
                                                    <img src={item?.image || avatar} alt="" />
                                                </div>
                                                <div className="new_chat_info">
                                                    <span className='new_chat_info_name'>{item?.name}</span>
                                                    <span className='new_chat_info_username'>{item?.pseudo}</span>
                                                </div>
                                            </div>
                                        }) : <span className='nooResult'> {loading ? 'Searching for "' + value + '"' : 'No result for "' + value + '"'}</span>}
                                        { }
                                    </> :
                                    <>
                                        {following?.data?.map(item => {
                                            return <div key={item.idUser} className={`new_chat_user ${item?.pseudo == userSelect?.pseudo ? 'fixhover' : 'hover'}`} onClick={() => setUserSelect(item)}>
                                                <div className="new_chat_avatar">
                                                    <img src={item?.image || avatar} alt="" />
                                                </div>
                                                <div className="new_chat_info">
                                                    <span className='new_chat_info_name'>{item?.name}</span>
                                                    <span className='new_chat_info_username'>{item?.pseudo}</span>
                                                </div>
                                            </div>
                                        })}
                                    </>
                                }
                            </>
                    }

                </div>
            </div>
        </div>
    )
}


