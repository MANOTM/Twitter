import React, { useEffect } from 'react';
import './Comment.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Main from '../../layouts/Main';
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead';
import Tweet from '../../components/posts/Tweets/Tweet';
import { CommentItem } from './Component/CommentItem/CommentItem';
import Loading from '../../components/Loading/Loading';
import CreateComment from './Component/CreateComment/CreateComment';
import { NoLike } from '../../components/ProfileComponent/NoLike/NoLike';
import { fetchTweet } from '../../redux/Reducers/CommentReducer';
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useRef } from 'react';

export default function Comment() {
    const [parent, enableAnimations] = useAutoAnimate()
    const { idTweet } = useParams();
    const dispatch = useDispatch();
    const { loading, tweet, comments } = useSelector((state) => state.comment);

    useEffect(() => {
        dispatch(fetchTweet(idTweet));
    }, []);
    return (
        <Main>
        <div className='reply__'>
            <ProfileHead name='Tweet' />
            {loading ? (
            <Loading />
            ) : tweet ? (
            <>
                <Tweet Tweet4Comment={true} tweet={tweet} />
                <CreateComment idUser={tweet?.idUser} idTweet={idTweet} />
                <div className='replys' ref={parent}>
                {comments.length ? (
                    comments.map((comment, i) => (
                    <CommentItem key={i} isComment={true} idTweet={idTweet} comment={comment} />
                    ))
                ) : (
                    <NoLike comment={true} any='comments' />
                )}
                </div>
            </>
            ) : (
            <NoLike TweetNotFound={true} any='comments' />
            )}
        </div>
        </Main>
    );
}
