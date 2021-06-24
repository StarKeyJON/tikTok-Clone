import React, { useState } from 'react';
import './VideoSidebar.css';
import { Favorite } from '@material-ui/icons';
import { FavoriteBorder } from '@material-ui/icons';
import { Message } from '@material-ui/icons';
import { Share } from '@material-ui/icons';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__option">
                { liked ? 
                <Favorite
                fontSize="large"
                onClick={e => setLiked(false)}
                /> 
                : 
                <FavoriteBorder
                fontSize="large"
                onClick={e => setLiked(true)}                
                /> 
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__option">
                <Message/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__option">
                <Share/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
