import React from 'react'
import './OptionCard.css'
import { Report, Block, Mute, List, Unfollow, SadImojis } from './OptionIcons/OptionIcons'

export default function OptionCard({ pseudo }) {
    return (
        <div className="option__card popup">
            <ul>
                <li>
                    <div className="option__icon">
                        <SadImojis />
                    </div>
                    <span className="option__title">Not interested in this Tweet</span>
                </li>
                <li>
                    <div className="option__icon">
                        <Unfollow />
                    </div>
                    <span className="option__title">Unfollow {pseudo}</span>
                </li>
                <li>
                    <div className="option__icon">
                        <List />
                    </div>
                    <span className="option__title">Add/remove {pseudo} from lists</span>
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
