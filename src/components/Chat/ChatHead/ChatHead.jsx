import { useStateContext } from '../../../contexts/ContextProvider'
import Back from '../../Icons/Back'
import NewMessage from '../../Icons/NewMessage'
import Collapse from '../../Icons/collapse'
import './ChatHead.css'

export const ChatHead = () => {
  const {handelChat,userChat,handelChange,ToBottom }=useStateContext()
  return ( 
    <div className="boite__m__header">
        <div className="boite__header__info">
          {userChat && 
          <div className="iconH">
           <Back className='header__back' onClick={()=>{handelChat(null)}}/>
          </div>
          }
        <div className="boite_header__user" onClick={handelChange} >
            <span className='boite__header__title'>{userChat?.first_name+userChat?.last_name || 'Messages'} </span>
            <span className='username'>{userChat?.last_name && '@'+userChat?.last_name }</span>
        </div>
        </div> 
        <div className="boite__header__actions"> 
        <div className="iconH">
           {!userChat? <NewMessage/>:''} 
        </div>
        <div className="iconH">

            <Collapse onClick={handelChange} className={`Collapse ${ToBottom && 'rotate'}`}/> 
        </div>
        </div>
    </div> 
  )
}
