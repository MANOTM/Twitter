import { useNavigate } from 'react-router-dom'
import './EditProfile.css'
import CloseIcon from '../../Icons/CloseIcon'
import defaultProfile from '../../../assets/images/defaultProfile.png'
import Camera from '../../Icons/camera'
import Input from '../../../pages/Auth/Components/Inputs/Input'

export const EditProfile = () => {
    const navigate = useNavigate()
    return (
        <div className='new__chat__container edit__profile' onClick={() => navigate(-1)}>
            <div className="new__chat scroll" onClick={e => { e.stopPropagation() }}>
                <div className="boite__m__header cursor_auto">
                    <div className='boite__header__info op1'>
                        <span className='iconH' onClick={() => navigate(-1)}><CloseIcon /></span>
                        <div className="boite_header__user">
                            <span className='boite__header__title'>Edit profile</span>
                        </div>
                    </div>
                    <div className="boite__header__actions">
                        <button className='next_btn op5'>Save</button>
                    </div>
                </div>

                <div>
                    <div className="profile_images">
                        <div className="profile_banner">
                            <div className="icons_flex">
                                <div className="icon">
                                    <Camera />
                                </div>
                                <div className="icon">
                                    <CloseIcon />
                                </div>
                            </div>
                            <img src='https://pbs.twimg.com/profile_banners/1513239491137388552/1673473098' name='cover' className="img__banner" />
                        </div>
                        <div className="profile__img">
                            <div className="img__profile">
                                <div className="icons_flex">
                                    <div className="icon">
                                        <Camera />
                                    </div>
                                </div>
                                <img src={defaultProfile} name='pp' />
                            </div>

                        </div>
                    </div>

                    <div className="profile_form">
                        <div className="Account__option__input">
                            <Input
                                name='name' 
                                label='Name'
                                value={'Otmane Mnaouri'}
                            />
                        </div> 
                        <div className="Account__option__input">
                            <Input
                                style={{height:'100px'}}
                                name='bio' 
                                label='Bio' 
                            />
                        </div> 
                        <div className="Account__option__input">
                            <Input
                                name='Location' 
                                label='Loaction'
                            />
                        </div> 
                    </div>
                </div>


            </div>
        </div>
    )
}
