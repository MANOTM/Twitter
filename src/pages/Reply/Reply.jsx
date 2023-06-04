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

export default function Reply() {

    const { idComment, idTweet } = useParams();
    const { loading, data } = useFetch('replies/'+idComment);
    const { loading:loading_Comment, data:data_comment } = useFetch('tweet/'+idTweet)
    const comment = data_comment?.data?.comments.find(one => one.idComment == idComment)
    return (
        <Main>
            <div className='reply__'>
                <ProfileHead name='Tweet' />
                {
                    !loading_Comment && <CommentItem key={Math.random()*9999} comment={comment} />
                }
                {
                    loading ? <Loading /> : 
                    <>
                        <CreateComment idTweet={idTweet} idComment={idComment} />
                        <div className="Title__reply">
                            <span>Replies</span>
                        </div>
                        <div className="replys">
                            {
                                loading ? <Loading /> :
                                data?.data?.length ? 
                                data?.data?.map((comment,i) => <CommentItem key={i} comment={comment} />) :
                                null
                            }
                        </div>
                    </>
                }
            </div>
        </Main>
    )
}
