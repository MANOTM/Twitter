import './NoLike.css'

export const NoLike = () => {
  return (
    <div className="noLikes">
      <div className='no__'>
        <span className='NoMedia__title'>@user hasn’t <br /> liked any Tweets</span>
        <span className='NoMedia__p'>When they do, those Tweets will show up here.</span>
      </div>
    </div>
  )
}
