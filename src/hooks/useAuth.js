import axios from "../api/axios";
import { useState, useEffect } from "react";

export const useAuth = (url,user) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.post(url,user)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            setError(false)
        });
    },[url,user])
    
    return { data, error, loading }
}