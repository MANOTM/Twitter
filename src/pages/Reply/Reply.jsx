import React, { useState } from 'react'
import '../Comment/Comment.css'
import Main from '../../layouts/Main'
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import { useStateContext } from '../../contexts/ContextProvider'
import { CommentItem } from '../Comment/Component/CommentItem/CommentItem'
import CreateComment from '../Comment/Component/CreateComment/CreateComment'
import { NoLike } from '../../components/ProfileComponent/NoLike/NoLike'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchReplies } from '../../redux/Reducers/ReplyReducer'

export default function Reply() {

    const { idComment, idTweet } = useParams();
    const dispatch = useDispatch();
    const { loading, replies } = useSelector((state) => state.reply);
    const { loading:loading_Comment, data:data_comment } = useFetch('tweet/'+idTweet)
    const comment = data_comment?.data?.comments.find(one => one.idComment == idComment)
    const { setHeadingCount } = useStateContext()
    setHeadingCount('Replys')

    useEffect(() => {
        dispatch(fetchReplies(idComment));
    }, []);

    return (
        <Main>
            <div className='reply__'>
                <ProfileHead name='Tweet' />
                {loading_Comment ? <Loading /> : 
                    <><CommentItem key={Math.random()*9999} comment={comment} />
                    {loading ? (
                    <Loading />
                    ) : (
                    <>
                        <CreateComment idTweet={idTweet} idComment={idComment} />
                        <div className="Title__reply">
                        <span>Replies</span>
                        </div>
                        <div className="replys">
                        {loading ? (
                            <Loading />
                        ) : replies.length ? (
                            replies?.map((comment, i) => <CommentItem key={i} comment={comment} isReply={true} />)
                        ) : (
                            <NoLike comment={true} any="Replys" />
                        )}
                        </div>
                    </>
                )}
                </>}
            </div>
        </Main>
    )
}
