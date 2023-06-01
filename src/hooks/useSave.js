import axios from '../api/axios'; 

const useSave = (action,idTweet) => {
    if(!action){
        axios.post('saveTweet/'+idTweet)
        .then(function (response) {
            console.log('added to bookmark');
        }) 
    } else{
        axios.post('unsaveTweet/'+idTweet)
        .then(function (response) {
            console.log('removed to bookmark');
        }) 
    }
    return null
}
export default useSave;