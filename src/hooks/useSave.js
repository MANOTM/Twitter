import axios from '../api/axios'; 

const useSave = (action,idTweet) => {
    if(!action){
        axios.post('saveTweet/'+idTweet)
        .then(function (response) {
            console.log('add tweet to bookmark');
        }) 
    } else{
        axios.post('unsaveTweet/'+idTweet)
        .then(function (response) {
            console.log('remove tweet from bookmark');
        }) 
    }
    return null
}
export default useSave;