import ThreePoints from "../../../components/Icons/ThreePoints"
import avatar from '../../../assets/images/defaultProfile.png'; 
import { Link } from "react-router-dom";
import { VerifyIcon } from "../../../components/Icons/PostIcons";
import DogIcon from "../../Home/icons/DogIcon";
import { HashtagLink } from "../../../assets/Helper/HashtagLink";

export const ReplyItem = () => {
  return (
    <div className="Tweet">
        <div className="tweet__content">
                <div className="tweet__left__img">
                    <div className="tweet__avatar__user">
                        <Link to={'/'+'@otmane'.substring(1)}>
                            <img loading='lazy' src={avatar} />
                        </Link>
                    </div>  
                </div>
                <div className="tweet__right">
                    <div className="tweet__info__user">
                        <div className="tweet__user shrenk">
                            <Link to={'/'+"@otan".substring(1)} className='teet__profile__line' >
                                <span className="tweet__username shrenk">{'Otmane Mnasouri'}</span>
                                {
                                true && (<span className="tweet__icon__verify">
                                            <VerifyIcon />
                                            <DogIcon />
                                        </span>)
                                }
                                <span className="tweet__pseudo">{'pseudo'}</span>
                                <span className='tweet__dot point'>.</span>
                            </Link>
                            <span className='tweet___date' > 4 days ago</span>
                        </div>
                        <div className="tweet__option__icon iconStyle center">
                            <div title='More'>
                                <ThreePoints />
                            </div>
                        </div>
                    </div> 
                    <div className="tweet__content__body">
                            <p className='tweet__paragraph'><HashtagLink text={'Hello yassine complete this tache pls'}/></p>
                        </div>
                    
                </div>
            </div>
    </div>

  )
}
