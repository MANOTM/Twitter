import { NavLink } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import ThreePoints from '../../Icons/ThreePoints'
import './ChatLine.css'

export const ChatLine = ({user,to}) => {
    const {handelChat }=useStateContext() 
  return (
    <NavLink to={to?'/messages/'+to:''} className='chat__line hover'  onClick={()=>{handelChat(user)}}>
        <div className="chat__line_">
            <div className="chat__avatar">
                <img src={ user.avatar } alt="" />
            </div>
            <div className="chat__line__content">
                <div className="chat__line_in">
                    <div className="chat__line__info">
                        <div className="chat__line__name  ">
                            <span className='name ellipsis'>{`${user.first_name} ${user.last_name} `} </span>
                        </div>
                        <div className="chat__line__username  ">
                            <span className='username '>@{user.first_name+user.last_name}</span>
                        </div>
                        <div className="chat__line__time">
                            <span className='username '><span className='point'>.</span> {' Apr 17'}</span>
                        </div>
                    </div>
                    
                    <div className="iconH">
                        <ThreePoints />
                    </div>
                </div>
                <div className="chat__line_message ellipsis">
                    <span className='text-gray '>{user.last_name}</span>
                </div>
            </div>
        </div>
    </NavLink>
  )
}
