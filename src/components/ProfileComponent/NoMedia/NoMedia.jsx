import './NoMedia.css'
import media from '../../../assets/images/media.png' 
export const NoMedia = () => {
  return (
    <div className='NoMedia'>
        <div>
            <img src={media} alt="" />
            <span className='title'>Lights, camera … <br /> attachments!</span>
            <span className='p'>When you send Tweets with photos or videos in them, they will show up here.</span>
        </div>
    </div>
  )
}
