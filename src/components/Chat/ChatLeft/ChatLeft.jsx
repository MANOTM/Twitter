import NewMessage from '../../Icons/NewMessage'
import './ChatLeft.css'

export const ChatLeft = () => {
  return (
    <div className='chat__left'>
        <div className="boite__m__header">
        <div className="boite__header__info">
        <div className="boite_header__user">
            <span className='boite__header__title'>Messages</span> 
        </div>
        </div> 
        <div className="boite__header__actions"> 
        <div className="iconH">
          <NewMessage/>
        </div> 
        </div>
    </div> 
    </div>
  )
}
