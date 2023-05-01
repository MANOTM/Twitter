import './profile.css'
import Main from '../../layouts/Main'
import ProfileHeader from './component/ProfileHeader'
import ProfileTweet from './component/ProfileTweet'
function Profile() {
  return (
      <Main>
      <div>
        <ProfileHeader />
        <ProfileTweet />
        {/* <ProfileTweetsReply/> */}
      </div>
      </Main>
  )
}

export default Profile
