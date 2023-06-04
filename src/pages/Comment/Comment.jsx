import React, { useState } from 'react'
import './Comment.css'
import Main from '../../layouts/Main'
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import Tweet from '../../components/posts/Tweets/Tweet'
import { CommentItem } from './Component/CommentItem/CommentItem'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import CreateComment from './Component/CreateComment/CreateComment'

export default function Comment() {

    // hello my friend if u find any issue try to fix it ,may get some hassanat
    const { idTweet } = useParams();
    const { loading, data } = useFetch('tweet/'+idTweet);
    return (
        <Main>
            <div className='reply__'>
                <ProfileHead name='Tweet' />
                {
                    loading ? <Loading /> : 
                    <>
                        <Tweet tweet={data?.data?.tweet} />
                        <CreateComment idTweet={idTweet} />
                        <div className="replys">
                            {
                                loading ? <Loading /> :
                                data?.data?.comments?.length ? 
                                data?.data?.comments?.map((comment,i) => <CommentItem key={i} idTweet={idTweet} comment={comment} />) :
                                null
                            }
                        </div>
                    </>
                }
            </div>
        </Main>
    )
}
