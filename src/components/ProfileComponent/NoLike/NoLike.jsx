import { useParams } from 'react-router-dom'
import './NoLike.css'

export const NoLike = () => {
  const {pseudo} = useParams()
  return (
    <div className="noLikes">
      <div className='no__'>
        <span className='NoMedia__title'>{pseudo} hasn’t liked any Tweets</span>
        <span className='NoMedia__p'>When they do, those Tweets will show up here.</span>
      </div>
    </div>
  )
}
