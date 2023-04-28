import React from 'react'
import './OptionCard.css'
import { Report, Block, Mute, List, Unfollow, SadImojis } from './OptionIcons/OptionIcons'

export default function OptionCard() {
    return (
        <div className="option__card">
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
                    <span className="option__title">Unfollow @Harrak</span>
                </li>
                <li>
                    <div className="option__icon">
                        <List />
                    </div>
                    <span className="option__title">Add/remove @Harrak from lists</span>
                </li>
                <li>
                    <div className="option__icon">
                        <Mute />
                    </div>
                    <span className="option__title">Mute @Harrak</span>
                </li>
                <li>
                    <div className="option__icon">
                        <Block />
                    </div>
                    <span className="option__title">Block @Harrak</span>
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
