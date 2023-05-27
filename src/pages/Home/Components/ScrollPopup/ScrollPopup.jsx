import React from 'react'
import './ScrollPopup.css'
import { ArrowUp } from "../../icons/DogIcon";
import avatar from '../../../../assets/images/defaultProfile.png'

export default function ScrollPopup() {
  return <div className="tweets__scroll__show">
    <div className="tweets__scroll">
      <div className="scroll__icon center">
        <ArrowUp />
      </div>
      <div className="scroll__avatars">
        <div className="scroll__bordered__avatar one">
          <img src={avatar} alt="" />
        </div>
        <div className="scroll__bordered__avatar two">
          <img src={avatar} alt="" />
        </div>
        <div className="scroll__bordered__avatar three">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="scroll__span">
        <span>Tweeted</span>
      </div>
    </div>
  </div>
}
