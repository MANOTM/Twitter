import axios from '../api/axios'
import  { useEffect, useState } from 'react'

const useAuth = (url) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    console.log(url);
    useEffect(()=>{ 
        axios.get('/login',url)
        .then(function (response) {
            setData(response.data)
            setLoading(false)
        })
        .catch(function (error) {
            setLoading(false)
            setError(false)
        }); 
    },[url])
    return {data , loading , error}
}
export default useAuth