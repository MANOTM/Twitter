import axios from '../api/axios'; 

const useFollow = (action,idUser) => {  
    if(action){
        axios.post('unfollow/'+idUser)
        .then(function (response) {
            console.log(response.data.message); 
        }) 
    } else{
        axios.post('follow/'+idUser)
        .then(function (response) {
            console.log(response.data.message)
        }) 
    }
    return true
}
export default useFollow