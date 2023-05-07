import { useState } from 'react'
import CloseIcon from '../../Icons/CloseIcon'
import GroupIcon from '../../Icons/GroupIcon'
import SearchIcon from '../../Icons/SearchIcon'
import './NewChat.css'
import { useStateContext } from '../../../contexts/ContextProvider'

export const NewChat = () => {
    const {ShowingCard,setShowingCard}=useStateContext()
    return (
        <div className='new__chat__container'hidden={!ShowingCard} onClick={()=>setShowingCard(false)}>
            <div className="new__chat scroll" onClick={e=>{e.stopPropagation()}}>
                <div className="boite__m__header cursor_auto">
                    <div className={`boite__header__info op1}`}>
                        <span className='iconH'  onClick={()=>setShowingCard(false)}><CloseIcon /></span>
                        <div className="boite_header__user">
                            <span className='boite__header__title'>New message</span>
                        </div>
                    </div>
                    <div className="boite__header__actions">
                        <button className='next_btn op5'>Next</button>
                    </div>
                </div>

                <div className="new_chat_content">
                    <div className="new_chat_input">
                        <SearchIcon fill="#71767b" />
                        <input type="text" placeholder="Search people" id="" />
                    </div>

                    <div className="new_grp hover">
                        <div className="new_grp_icon">
                            <GroupIcon />
                        </div>
                        <span className='new_grp_text '>
                            Create a group
                        </span>
                    </div>

                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                    <div className="new_chat_user hover">
                        <div className="new_chat_avatar">
                            <img src='https://pbs.twimg.com/profile_images/1645799199852859397/h_b0s_IW_bigger.jpg' alt="" />
                        </div>
                        <div className="new_chat_info">
                            <span className='new_chat_info_name'>Otmane Mansouri</span>
                            <span className='new_chat_info_username'>@MANOTM_1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
