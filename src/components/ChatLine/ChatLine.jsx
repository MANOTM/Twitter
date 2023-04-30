import ThreePoints from '../Icons/ThreePoints'
import './ChatLine.css'

export const ChatLine = ({avatar,name,usernam,time,text}) => {
  return (
    <div className='chat__line hover'>
        <div className="chat__line_">
            <div className="chat__avatar">
                <img src={ avatar } alt="" />
            </div>
            <div className="chat__line__content">
                <div className="chat__line__info">
                    <div className="chat__line__name  ">
                        <span className='name ellipsis'>{name} </span>
                    </div>
                    <div className="chat__line__username  ">
                        <span className='username '>@{usernam}</span>
                    </div>
                    <div className="chat__line__time">
                        <span className='username '><span className='point'>.</span> {time}</span>
                    </div>
                    <div className="post__option">
                        <div><ThreePoints /></div> 
                    </div>
                </div>
                <div className="chat__line_message ellipsis">
                    <span className='text-gray '>{text}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
