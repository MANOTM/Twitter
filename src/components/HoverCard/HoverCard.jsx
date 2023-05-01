import { Link } from 'react-router-dom'
import FollowBtn from '../buttons/FollowBtn'
import './HoverCard.css'
import VerifyIc from '../Icons/VerifyIc'
import { useStateContext } from '../../contexts/ContextProvider';

function HoverCard({isIn,setisIn}) {
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
                    <img src="	https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_bigger.jpg" alt="" />
                </Link>
                <div>
                    <FollowBtn title="Follow" />
                </div>
            </div>
            <Link to='' className="hover__card_user">
                <span className='name ellipsis underline'>Elon Musk
                    <span className="Verify__icon align-center">
                        <VerifyIc fill="#1d9bf0" />
                    </span>
                </span>
                <span className='username ellipsis'>@elonmusk</span>
            </Link>

            <div className="hover__card_bio">
                <p> nothing  </p>
            </div>
            <div className="card__followers">
                <Link to='' className="c_followers underline">
                    <span>236</span>
                    <span className='username '>Following</span>
                </Link>
                <Link to='' className="c_followers underline">
                    <span>135.7M</span>
                    <span className='username '>Followers</span>
                </Link>
            </div>

        </div>
    )
}

export default HoverCard
 