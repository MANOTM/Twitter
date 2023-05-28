import React from "react";
import "./Video.css";

export default function Video({ video }) {
    return (
        <div className="tweet__video">
            <video 
            poster="twitter_video.png" 
            autoPlay 
            // loop 
            muted 
            controls>
                <source src={video} />
            </video>
        </div>
    );
}
