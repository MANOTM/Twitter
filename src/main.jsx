import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from './api/axios'
import Cookies from 'js-cookie'
import { store } from './redux/store'
import { Provider } from 'react-redux'


let token = Cookies.get("Auth_token");


if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
  axios
  .get('/profile/'+localStorage.getItem('pss'))
  .then(res => {
    store.dispatch({ type:"Auth/LogIn", payload: res.data.data })
    console.log(res.data.data);
    render()
  }).catch((error) =>{
    console.log(error);
  })
}else{
  render()
}
 

function render() {
  ReactDOM.createRoot(document.getElementById('twitter')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}
