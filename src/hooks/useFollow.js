import axios from '../api/axios';
import  { useEffect, useState } from 'react'

const useFollow = (currentPseudo,pseudo) => { 
    const [dataa, setData] = useState(null) 
    useEffect(()=>{  
        axios.get('followings/'+currentPseudo)
        .then(function (response) {
           setData(response?.data?.data?.some(user=> user.pseudo.substring(1) == pseudo))
        })
        .catch(function (error) { 
        });  
    },[currentPseudo])
    return {dataa}
}export default useFollow