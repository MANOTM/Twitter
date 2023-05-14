import useFetch from '../../../hooks/useFetch'
import Loading from '../../Loading/Loading'
import { ShowMore } from '../../ShowMore/ShowMore'
import SuggestionUser from '../../WhoToFollow/SuggestionUser' 
import './WhoToFollow100.css'

export const WhoToFollow100 = () => {

  const {data,loading}=useFetch('usersToFollow/') 
  return (
    <div className='WhoToFollow100'>
        <span className="profile__title">Who to follow</span>
        {loading ? <Loading/> :
          data?.data?.slice(0,3).map((user,id)=>{
            return <SuggestionUser key={id} userSu={user}/>
          })
        } 
        
        <ShowMore to='/connect'/>
    </div>
  )
}
