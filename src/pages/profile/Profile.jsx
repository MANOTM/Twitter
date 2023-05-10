import './profile.css'
import Main from '../../layouts/Main' 
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import ThreePoints from '../../components/Icons/ThreePoints'
import Born from '../../components/Icons/Born'
import Calendrier from '../../components/Icons/calendrier'
import { Link, NavLink } from 'react-router-dom'
import { ProfileInfo } from '../../components/ProfileComponent/ProfileInfo/ProfileInfo'
import SuggestionUser from '../../components/WhoToFollow/SuggestionUser'
import { NoMedia } from '../../components/ProfileComponent/NoMedia/NoMedia'
function Profile() {
  return (
      <Main> 
        <div className="profile scroll">
          <ProfileHead name={'Otmane Mnasouri'} tweetCount={'13.2k'}/>
          <ProfileInfo/>
          <div className="profile__links">
              <NavLink> Tweets  </NavLink>
              <NavLink to='/'> Replies </NavLink>
              <NavLink to='/'> Media  </NavLink>
              <NavLink to='/'> Likes  </NavLink>
          </div>
          <div className="profile_selecte">
            {/* <div className="profile__title">Who to follow</div>
           <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
           <SuggestionUser name='Manchester United' username='ManchesterUnited' avatar='https://pbs.twimg.com/profile_images/1622866928434806784/29U-nXuq_normal.jpg'/>
           <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
           <SuggestionUser name='Manchester United' username='ManchesterUnited' avatar='https://pbs.twimg.com/profile_images/1622866928434806784/29U-nXuq_normal.jpg'/> */}

           <NoMedia/>
          </div>
        </div>
      </Main>
  )
}

export default Profile
