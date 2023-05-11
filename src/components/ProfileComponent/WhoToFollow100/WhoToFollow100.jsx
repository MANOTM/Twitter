import { ShowMore } from '../../ShowMore/ShowMore'
import SuggestionUser from '../../WhoToFollow/SuggestionUser' 
import './WhoToFollow100.css'

export const WhoToFollow100 = () => {
  return (
    <div className='WhoToFollow100'>
        <span className="profile__title">Who to follow</span>
        <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
        <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
        <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
        <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
        <ShowMore/>
    </div>
  )
}
