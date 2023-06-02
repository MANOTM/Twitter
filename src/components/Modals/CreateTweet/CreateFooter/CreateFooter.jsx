import React from 'react'
import Gif from '../../../../pages/Home/icons/Gif'
import Emojis from '../../../../pages/Home/icons/Emojis'
import Map from '../../../../pages/Home/icons/Map'
import Gallery from '../../../Icons/Gallery'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import { useStateContext } from '../../../../contexts/ContextProvider'

export default function CreateFooter({ Media, tweet, click, image, setTweet }) {
    const { setZIndex } = useStateContext()
    const [ShowingEmoji, setShowingEmoji] = useState(true);
    const selectEmojis = e => {
        // setShowingEmoji(true)
        const sym = e.unified.split("_");
        const codeArray = [];
        sym.forEach(el => codeArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codeArray);
        setTweet(emoji)
    }
    const open = () => {
        setShowingEmoji(false)
        setZIndex(true)
    }
    const close = () => {
        setShowingEmoji(true)
        setZIndex(false)
    }
    return <>
        <div hidden={ShowingEmoji} onClick={close} className="emojisBackground"></div>
        <div className="createTweet__footer">
            <div className="createTweet__actions">
                <div className="createTweet__buttons__withImoji">
                    <input onChange={image} type="file" accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime" ref={Media} hidden />
                    <span onClick={() => Media.current.click()} className='center' title='Media'><Gallery /></span>
                    <span className='center' title='GIF'><Gif /></span>
                    <span onClick={open} className='center' title='Emoji'><Emojis /></span>
                    <span className='center' title='Map'><Map /></span>
                </div>
                <div onClick={click} className={`createTweet__Tweet__button ${!tweet?.image && !tweet?.description?.trim() && !tweet?.video && 'disabled'}`}>
                    <button>Tweet</button>
                </div>
            </div>
            <div hidden={ShowingEmoji}>
                <div className="stoPro__create" >
                    <Picker 
                    data={data} 
                    // emojiSize={20}
                    // emojiButtonSize={30}
                    onEmojiSelect={selectEmojis}
                    maxFrequentRows={1} />
                </div>
            </div>
        </div>
    </>
}
