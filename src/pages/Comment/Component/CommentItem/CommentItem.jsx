import ThreePoints from "../../../../components/Icons/ThreePoints"
import avatar from '../../../../assets/images/defaultProfile.png'; 
import { Link, useNavigate } from "react-router-dom";
import { VerifyIcon } from "../../../../components/Icons/PostIcons";
import DogIcon from "../../../Home/icons/DogIcon";
import { HashtagLink } from "../../../../assets/Helper/HashtagLink";
import formatTimeAgo from "../../../../assets/Helper/FormatDate";
import moment from "moment";
import { useState } from "react";
import OptionCard from "../../../../components/OptionCard/OptionCard";
import { useStateContext } from "../../../../contexts/ContextProvider";

export const CommentItem = (
    {
        isComment,
        isReply,
        idTweet,
        comment : {
            idUser,
            repliesCount,
            replyBody,
            idComment,
            id,
            pseudo,
            verification,
            created_at,
            body,
            pp,
            name
        }
    }) => {


    const formattedDate = moment(created_at).format('MMMM Do YYYY, h:mm:ss a');
    const timeSpan = moment(created_at).fromNow();
    const [OptionHover, setOptionHover] = useState(false)
    const [interested, setInterested] = useState(false)
    const { IsArabic } = useStateContext()

    const showOption = () => {
        setOptionHover(true)
    }
    const hiddeOption = event => {
        if(event) event.stopPropagation();
        setOptionHover(false)
    }   
    return (
    <div className="Tweet" hidden={interested}>
        <div className="tweet__content tweet__comment">
                <div className="tweet__left__img">
                    <div className="tweet__avatar__user">
                        <Link to={'/'+pseudo.substring(1)}>
                            <img loading='lazy' src={pp || avatar} />
                        </Link>
                    </div>  
                </div>
                <div className="tweet__right">
                    <div className="tweet__info__user">
                        <div className="tweet__user shrenk">
                            <Link to={'/'+pseudo.substring(1)} className='teet__profile__line' >
                                <span className="tweet__username shrenk">{ name }</span>
                                {
                                verification && (<span className="tweet__icon__verify">
                                            <VerifyIcon />
                                            <DogIcon />
                                        </span>)
                                }
                                <span className="tweet__pseudo">{ pseudo }</span>
                                <span className='tweet__dot point'>.</span>
                            </Link>
                            <span className='tweet___date' title={formattedDate} >{formatTimeAgo(timeSpan)}</span>
                        </div>
                        <div onClick={()=>JSON.parse(localStorage.getItem('id_follows')) && showOption(false)} className="tweet__option__icon iconStyle center">
                            { OptionHover && <>
                                <div onClick={hiddeOption} className="overlay__hidden"></div>
                                <OptionCard
                                idUser={idUser}
                                commentOption={isReply ? false : true}
                                replyOption={isReply}
                                idComment={idComment || id}
                                hiddeOptionClick={()=>hiddeOption()}
                                setInterested={()=>setInterested(true)} 
                                pseudo={pseudo} />
                            </> }
                            <div title='More'>
                                <ThreePoints />
                            </div>
                        </div>
                    </div> 
                    <Link to={isComment ? `/${pseudo.substring(1)}/reply/${idComment}/${idTweet}` : null} className="tweet__content__body">
                        <p className={`tweet__paragraph  ${IsArabic(body) && 'arabic'}`}><HashtagLink text={ body || replyBody }/></p>
                    </Link>
                    {
                        repliesCount ? 
                            isComment &&
                            <div className="Show__repllies">
                                <Link to={`/${pseudo.substring(1)}/reply/${idComment}/${idTweet}`}>
                                    Show replies <small>{`(${repliesCount})`}</small>
                                </Link>
                            </div> : null
                    }
                </div>
            </div>
    </div>

)
}
