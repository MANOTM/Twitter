import React from 'react';
import './TrendResult.css';
import useFetch from '../../../../hooks/useFetch';
import Loading from '../../../Loading/Loading';
import { WhoToFollow100 } from '../../../ProfileComponent/WhoToFollow100/WhoToFollow100';
import Tweet from '../../../posts/Tweets/Tweet';

export default function TrendResult({ hashtag }) {
    
    const { data, loading } = useFetch('/trends/'+hashtag)

    return <div className="result">
        <div className="trend__resultat">
            <div className="result__title" title={hashtag}>
                <span>resultat  <a href="#" className='underline'>#{ hashtag }</a></span>
            </div>
            <div className="trend__tweets">
                {
                    loading ? <Loading /> : 
                    !data?.data?.length ? <WhoToFollow100 /> :
                    data?.data?.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
                }
            </div>
        </div>
    </div>
}
