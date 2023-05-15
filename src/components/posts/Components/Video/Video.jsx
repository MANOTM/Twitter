import React from 'react'
import video from '../../../../assets/images/green_day.mp4'
import './Video.css'

export default function Video() {
    return <div className="tweet__video">
        <video autoPlay loop muted poster='twitter_video.png' controls>
            <source src={video} />
        </video>
    </div>
}
