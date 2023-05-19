import useFetch from '../../../hooks/useFetch'
import Loading from '../../Loading/Loading'
import { ShowMore } from '../../ShowMore/ShowMore'
import SuggestionUser from '../../WhoToFollow/SuggestionUser' 
import './WhoToFollow100.css'
import { useSelector } from 'react-redux'

export const WhoToFollow100 = () => {

  const { user:{ pseudo } } = useSelector(state => state.Auth)  
  const following= useFetch('followings/'+pseudo ).data
  const loading2= useFetch('followings/'+pseudo ).loading ;

  const {data,loading}=useFetch('usersToFollow/') 
  return (
    <div className='WhoToFollow100'>
        <span className="profile__title">Who to follow</span>
        {loading || loading2 ? <Loading/> :
          data?.data?.slice(0,3).map((user,id)=>{
            return <SuggestionUser key={id} isFollowed={following?.data?.some(follow=> follow?.pseudo == user?.pseudo)} userSu={user}/>
          })
        } 
        
        <ShowMore to='/connect'/>
    </div>
  )
}
