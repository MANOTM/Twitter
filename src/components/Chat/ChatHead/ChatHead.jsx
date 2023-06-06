import { useDispatch, useSelector } from 'react-redux'
import { useStateContext } from '../../../contexts/ContextProvider'
import Back from '../../Icons/Back'
import NewMessage from '../../Icons/NewMessage'
import Collapse from '../../Icons/collapse'
import './ChatHead.css'
import { getConversations, handelInchat } from '../../../redux/Reducers/Chat'
import { useEffect } from 'react'

export const ChatHead = () => {

  const { handelChat, userChat, handelChange, ToBottom, setShowingCard } = useStateContext()
  const { user } = useSelector(state => state.Auth) 
  const dispatch = useDispatch()
  const { status, converstions ,InChat} = useSelector((state) => state.Chat);

  useEffect(() => {
    if (!ToBottom) {
      const fetching = () => {
        dispatch(getConversations(user?.id))
      }
      const timeOut = setTimeout(() => {
        fetching()  
        console.log('boite message loaded');    
      }, 5000)

      return () => { clearTimeout(timeOut) }
    }
  }, [ToBottom, status, converstions])


  useEffect(() => {
    if (status !== 'ok') return
    const findUser = converstions.find(item => item?.receiver_pseudo == userChat?.receiver_pseudo)
    handelChat(findUser)
  }, [status, converstions])

  const back = ()=>{
    dispatch(handelInchat(false))
    handelChat(null) 
  } 
  return (
    <div className="boite__m__header">
      <div className="boite__header__info">
        {InChat &&
          <div className="iconH">
            <Back className='header__back' onClick={()=>back()} />
          </div>
        }
        <div className="boite_header__user" onClick={handelChange} >
          <span className='boite__header__title'>{InChat ? userChat?.receiver_name : 'Messages'} </span>
          <span className='username'>{InChat && userChat?.receiver_pseudo}</span>
        </div>
      </div>
      <div className="boite__header__actions">
        {!userChat &&
          <div className="iconH" onClick={() => setShowingCard(true)}>
            <NewMessage />
          </div> }

        <div className="iconH">
          <Collapse onClick={handelChange} className={`Collapse ${ToBottom && 'rotate'}`} />
        </div>
      </div>
    </div>
  )
}
