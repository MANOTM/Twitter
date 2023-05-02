import './ChatInput.css'
import Send from '../../Icons/Send'
import Gallery from '../../Icons/Gallery'
import Emojis from '../../Icons/Emojis'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import { useRef } from 'react'

export const ChatInput = () => {
  const [message,setMessage]=useState('')
  const [ShowingEmoji, setShowingEmoji] = useState(false)
  const InputElement = useRef();
  const InputFile = useRef();


  const EmojiSelect=e=>{
    setMessage(message+e.native)   
    InputElement.current.focus()
  }
  return (
    <>
      <div className="chat__input">
        <div className="chat__form">
          <div className="chat_form__actions">
            <div className="iconHB iconH">
            <Gallery onClick={()=>{InputFile.current.click()}}/>
            </div>
            <div className="iconHB iconH"  >
            <Emojis onClick={()=>setShowingEmoji(!ShowingEmoji)}/>

            </div>
          </div>
          <div className="chat_form_input">
            <input type="text" placeholder='Start a new message'  ref={InputElement} value={message} onChange={e=>setMessage(e.target.value)}/>
          </div>
          <div className="iconHB iconH" >
          <Send className='chat__send '/> 
          </div>
        </div>
      </div> 
      <input type="file"  ref={InputFile} className="d-none"/>

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
