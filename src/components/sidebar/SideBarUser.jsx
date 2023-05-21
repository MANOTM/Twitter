
import { useState } from 'react';
import axios from '../../api/axios';
import defaultProfile from '../../assets/images/defaultProfile.png'
import { useStateContext } from '../../contexts/ContextProvider';
import { useEffect } from 'react';
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
        {loading ? '':
        <>
            <div className="avatar">
                <img src={data?.pp || defaultProfile} alt="" />
            </div>
            <div className="info">
                <span className='name ellipsis'>{data?.name}</span>
                <span className='username ellipsis'>{data?.pseudo.toUpperCase()}</span>
            </div>
    
        </>}
        </>
    )
}
