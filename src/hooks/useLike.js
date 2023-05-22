import axios from '../api/axios'; 

const useLike = (action,idTweet) => {
    if(!action){
        axios.post('likeTweet/'+idTweet)
        .then(function (response) {
            console.log('like');
        }) 
    } else{
        axios.post('disLikeTweet/'+idTweet)
        .then(function (response) {
            console.log('dislike');
        }) 
    }
    return null
}
export default useLike;