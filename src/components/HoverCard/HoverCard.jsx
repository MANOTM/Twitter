import { Link } from 'react-router-dom'
import FollowBtn from '../buttons/FollowBtn'
import './HoverCard.css'
import VerifyIc from '../Icons/VerifyIc'
import { useStateContext } from '../../contexts/ContextProvider';
import avatar from '../../assets/images/defaultProfile.png';

function HoverCard({isIn,setisIn, user: { name, pseudo, bio, followings, followers, cover }}) {
    const { CardHover, setCardHover } = useStateContext(); 
    const MouseIn = ()=>{
        setCardHover(true) 
        setisIn(true) 
    }
    const MouseOut = ()=>{
        setCardHover(false) 
        setisIn(false)
    }
    return (
        <div className='hover__card' onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
            <div className="hover__card__header">
                <Link to='' className="avatar big__avatar">
                    <img src={cover || avatar} alt="profile__avatar" />
                </Link>
                <div>
                    <FollowBtn title="Follow" />
                </div>
            </div>
            <Link to='' className="hover__card_user">
                <span className='name ellipsis underline'>{name}
                    <span className="Verify__icon align-center">
                        <VerifyIc fill="#1d9bf0" />
                    </span>
                </span>
                <span className='username ellipsis'>{pseudo} </span>
            </Link>

            <div className="hover__card_bio">
                {bio && (<p> {bio} </p>)}
            </div>
            <div className="card__followers">
                <Link to='' className="c_followers underline">
                    <span>{ followings || 0 }</span>
                    <span className='username '>Following</span>
                </Link>
                <Link to='' className="c_followers underline">
                    <span>{ followers || 0 }</span>
                    <span className='username '>Followers</span>
                </Link>
            </div>

        </div>
    )
}

export default HoverCard
 