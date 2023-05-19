import React from 'react'
import './OptionCard.css'
import { Report, Block, Mute, List, Unfollow, SadImojis, DeleteIcon, EditTweetIcon } from './OptionIcons/OptionIcons'

export default function OptionCard({ pseudo, setInterested }) {

    const user_pseudo = JSON.parse(localStorage.getItem('user_info'))?.pseudo === pseudo

    return (
        <div className="option__card popup">
            <ul>
                {
                    user_pseudo && (<>
                        <li>
                            <div className="option__icon delete">
                                <DeleteIcon />
                            </div>
                            <span className="option__title delete">Delete</span>
                        </li>
                        <li>
                            <div className="option__icon">
                                <EditTweetIcon />
                            </div>
                            <span className="option__title">Edit tweet</span>
                        </li>
                    </>)
                }
                <li onClick={()=>setInterested()}>
                    <div className="option__icon">
                        <SadImojis />
                    </div>
                    <span className="option__title">Not interested in this Tweet</span>
                </li>
                {
                    !user_pseudo && (<>
                        <li>
                            <div className="option__icon">
                                <Unfollow />
                            </div>
                            <span className="option__title">Unfollow {pseudo}</span>
                        </li>
                        <li>
                            <div className="option__icon">
                                <Mute />
                            </div>
                            <span className="option__title">Mute {pseudo}</span>
                        </li>
                        <li>
                            <div className="option__icon">
                                <Block />
                            </div>
                            <span className="option__title">Block {pseudo}</span>
                        </li>
                    </>)
                }
                <li>
                    <div className="option__icon">
                        <List />
                    </div>
                    <span className="option__title">Add/remove {pseudo} from lists</span>
                </li>
                <li>
                    <div className="option__icon">
                        <Report />
                    </div>
                    <span className="option__title">Report Tweet</span>
                </li>
            </ul>
        </div>
    )
}
