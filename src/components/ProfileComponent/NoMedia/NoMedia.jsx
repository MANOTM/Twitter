import './NoMedia.css'
import media from '../../../assets/images/media.png' 
export const NoMedia = () => {
  return (
    <div className='NoMedia'>
        <div className='no__'>
            <img src={media} alt="" />
            <span className='NoMedia__title'>Lights, camera … <br /> attachments!</span>
            <span className='NoMedia__p'>When this user send Tweets with photos or videos in them, they will show up here.</span>
        </div>
    </div>
  )
}
