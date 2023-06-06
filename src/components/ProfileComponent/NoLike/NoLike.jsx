import { useParams } from 'react-router-dom';
import './NoLike.css';

export const NoLike = ({ action, any, comment, TweetNotFound }) => {
  const { pseudo } = useParams();
  return (
    <div className="noLikes">
      <div className='no__'>
        {!TweetNotFound ? (
          comment ? (
            <>
              <span className='NoMedia__title'>This Tweet has no {any}</span>
              <span className='NoMedia__p'>
                When they do, those {any || 'Tweets'} will show up here.
              </span>
            </>
          ) : (
            <>
              <span className='NoMedia__title'>
                {pseudo} hasn’t {action || 'liked'} any {any || 'Tweets'}
              </span>
              <span className='NoMedia__p'>
                When they do, those {any || 'Tweets'} will show up here.
              </span>
            </>
          )
        ) : (
          <>
            <span className='NoMedia__title'>There is no tweet with this id😊</span>
            <span className='NoMedia__p'>Go out jib dora, then come back try again</span>
          </>
        )}
      </div>
    </div>
  );
};
