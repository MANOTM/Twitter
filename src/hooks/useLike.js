import axios from '../api/axios'; 

const useLike = (action,idTweet) => {  
    if(action){
        axios.post('likeTweet/'+idTweet)
        .then(function (response) {
            console.log(response.data.message); 
        }) 
    } else{
        axios.post('disLikeTweet/'+idTweet)
        .then(function (response) {
            console.log(response.data.message)
        }) 
    }
    return true
}
export default useFollow