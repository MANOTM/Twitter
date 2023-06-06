import './ChatInput.css'
import Send from '../../Icons/Send'
import Gallery from '../../Icons/Gallery'
import Emojis from '../../Icons/Emojis'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import { useRef } from 'react'
import axios from '../../../api/axios'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../redux/Reducers/Chat'

export const ChatInput = () => {
  const [message,setMessage]=useState('')
  const [ShowingEmoji, setShowingEmoji] = useState(false)
  const InputElement = useRef(); 
  const dispatch=useDispatch()
  const { userChat ,CallToast} = useStateContext()

  const send = e =>{
    e.preventDefault()
    if (!message) return
    dispatch(sendMessage({'message_text':message, 'idReceiver':userChat?.idReceiver}))
    setMessage('')
    axios.post('message/'+userChat?.idReceiver, { 'message_text':message})
      .then(function (response) {
          console.log(response.data); 
      })
      .catch(function (error) {
        CallToast("Somthig wrong 🤷‍♂️",1800)
      }); 
  }
  
  const EmojiSelect=e=>{
    setMessage(message+e.native)   
    InputElement.current.focus()
  }
  return (
    <>
      <div className="chat__input">
        <div className="chat__form">
          <div className="chat_form__actions">
            <div className="iconHB iconH" onClick={()=>{ CallToast("Sorry We don't have this option yet😢",3000);}}>
            <Gallery />
            </div>
            <div className="iconHB iconH"  >
            <Emojis onClick={()=>setShowingEmoji(!ShowingEmoji)}/>
            </div>
          </div>
          <form className="chat_form_input" onSubmit={send}>
            <input type="text" placeholder='Start a new message'  ref={InputElement} value={message} onChange={e=>setMessage(e.target.value)}/>
          </form>
          <div className="iconHB iconH" onClick={send}>
            <Send className='chat__send ' /> 
          </div>
        </div>
      </div>  

      <div className='emoji_div' hidden={!ShowingEmoji} onClick={()=>setShowingEmoji(!ShowingEmoji)}>
        <div className="stoPro" onClick={e=>{e.stopPropagation()}}>
        <Picker data={data} onEmojiSelect={
          e=>{EmojiSelect(e)}
        } />
        </div>
      </div>
    </>
  )
}
