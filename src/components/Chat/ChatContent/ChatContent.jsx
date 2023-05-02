import { useStateContext } from '../../../contexts/ContextProvider'
import './ChatContent.css'

export const ChatContent = () => {
  const {userChat}=useStateContext()

  return (
    <div className='chat__content'>
        <div className="chat__content__head hover">
            <div className="avatar64">
                <img src={userChat.avatar} alt="" />
            </div>
            <div className="user__InFo">
                <span className="name underline">{userChat?.first_name+userChat?.last_name }</span>
                <span className="username">{userChat?.last_name && '@'+userChat?.last_name }</span>
            </div>
            <span className='user__bio'>"يَا أَيُّهَا الَّذِينَ آمَنُواْ اسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ إِنَّ اللّهَ مَعَ الصَّابِرِينَ",(153)</span>
            <span className='user__joined text-gray'>Joined March 2021 <span className='point'>.</span> 15 Followers</span>
        </div>
        <div className="chat">
            <div className="chat_ele">
                <span className="chat__text">Small msg</span>
                <small className="chat__date text-gray">Apr 17, 2023, 1:39 PM</small>
            </div>
            
            <div className="chat_ele align__flex_end">
                <span className="chat__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur eveniet, voluptatibus voluptate dolor cum. Exercitationem voluptate necessitatibus assumenda eveniet! Ullam quia, iure inventore architecto animi reprehenderit voluptates exercitationem. Dolor.</span>
                <small className="chat__date text-gray">Apr 17, 2023, 1:39 PM</small>
            </div>
            <div className="chat_ele">
                <div className="chat__img">
                    <img src="https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small" alt="" />
                </div>
                <small className="chat__date text-gray">Apr 17, 2023, 1:39 PM</small>
            </div>
        </div>
    </div>
  )
}
