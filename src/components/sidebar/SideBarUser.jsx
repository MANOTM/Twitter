
import { useState } from 'react';
import axios from '../../api/axios';
import defaultProfile from '../../assets/images/defaultProfile.png'
import { useStateContext } from '../../contexts/ContextProvider';
import { useEffect } from 'react';
import { Skeleton } from '../Loading/Skeleton/skeleton';
export const SideBarUser = ({pseudo}) => {
    
  const { render } = useStateContext();
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null) 
  
  useEffect(()=>{ 
    axios.get('profile/' + pseudo)
      .then(function (response) {
        setData(response.data?.data)
        setLoading(false) 
      })
      .catch(function (error) {
        console.log(error);
      });  
  },[render])
    return (
        <>
            <div className="avatar">
                {loading ? <Skeleton/>:<img src={data?.pp || defaultProfile} alt="" />}
            </div>
            <div className="info">
                <span className='name ellipsis'> {loading && <div className='w100'><Skeleton/></div>} {data?.name }</span>
                <span className='username ellipsis'>{loading && <div className='w50'><Skeleton/></div>}{data?.pseudo}</span>
            </div>
    
        </>
    )
}
