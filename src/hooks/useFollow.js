import axios from '../api/axios';
import  { useEffect, useState } from 'react'

const useFollow = (action,idUser) => { 
    if(action){
        axios.post('unfollow/'+idUser)
        .then(function (response) {
            console.log(response);
        }) 
    } else{
        axios.post('follow/'+idUser)
        .then(function (response) {
            console.log(response.data)
        }) 
    }
    return true
}
export default useFollow