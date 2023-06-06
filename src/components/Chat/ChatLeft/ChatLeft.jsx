import { useEffect, useState } from 'react'
import NewMessage from '../../Icons/NewMessage'
import SearchIcon from '../../Icons/SearchIcon'
import SettingsIcon from '../../Icons/SettingsIcon'
import './ChatLeft.css'
import { ChatLine } from '../ChatLine/ChatLine'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useDispatch, useSelector } from 'react-redux'
import { getConversations } from '../../../redux/Reducers/Chat'
import Loading from '../../Loading/Loading';

export const ChatLeft = () => {
    const [InputActive, setInputActive] = useState(false)
    const { setShowingCard } = useStateContext()
    const { user } = useSelector(state => state.Auth)


    const dispatch = useDispatch();
    const { status, converstions } = useSelector((state) => state.Chat);
    const [searchResult, setSearchResult] = useState(null)
    const [val, setVal] = useState('')

    //get conversation evry 5s
    useEffect(() => {    
        console.log('load conversation');
        const fetching = () =>{ 
            dispatch(getConversations(user?.id))
        }
        const timeOut= setTimeout(()=>{
            fetching()
        },5000)

        return ()=>{clearTimeout(timeOut)}

    }, [status, converstions])


    const search = e => {
        setVal(e.target.value)
        setSearchResult(
            converstions.filter((user) =>
                user.receiver_name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    }

    return (
        <div className='chat__left scroll'>
            <div className="boite__m__header cursor_auto">
                <div className="boite__header__info">
                    <div className="boite_header__user">
                        <span className='boite__header__title'>Messages</span>
                    </div>
                </div>
                <div className="boite__header__actions">
                    {/* <div className="iconH">
                        <SettingsIcon />
                    </div> */}
                    <div className="iconH" onClick={() => setShowingCard(true)}>
                        <NewMessage />
                    </div>
                </div>
            </div>

            {status == 'loading' ? <Loading /> :
                <>
                    {!converstions.length ?

                        <div className="no_user_select">
                            <div className="no_user_content">
                                <span>Welcome to your inbox!</span>
                                <p>Drop a line, share Tweets and more with private conversations between you and others on Twitter.   </p>
                                <button className='tweet__bottom bg-blue' onClick={() => setShowingCard(true)}> New message</button>
                            </div>
                        </div>
                        :
                        <>
                            <div className={`search__chat ${InputActive && 'active'}`} onClick={() => setInputActive(true)}>
                                <div className="search__chat_form">
                                    <SearchIcon fill="rgb(113, 118, 123)" />
                                    <div className="input__search">
                                        <input type="text" value={val} onChange={search} placeholder='Search Direct Messages' onBlur={() => { setInputActive(false) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="chat_left_users">
                                {
                                    val ?
                                        <>
                                            {searchResult.length ? searchResult.map((item, index) => <ChatLine user={item} key={index} to={item.receiver_pseudo} />) :
                                                <div className="no_user_select">
                                                    <div className="no_user_content">
                                                        <span>No results for "{val}"</span>
                                                        <p>The term you entered did not bring up any results</p>
                                                        <button className='tweet__bottom bg-blue' onClick={() => setShowingCard(true)}> New message</button>
                                                    </div>
                                                </div>
                                            }
                                        </>
                                        :
                                        converstions.slice().reverse().map((item, index) => <ChatLine user={item} key={index} to={item?.receiver_pseudo} />)}
                            </div>
                        </>

                    }
                </>
            }





        </div>
    )
}

