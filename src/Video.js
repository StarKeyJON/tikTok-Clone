import React, {useRef, useState} from 'react'
import VideoFooter from './VideoFooter';
import './Video.css';
import VideoSidebar from './VideoSidebar';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://www.tiktok.com/@sheiskd_/video/6973440546278804742"    
            ></video>
            <img scr="https://i.redd.it/tvtn7jv69wu61.jpg"></img>
            <VideoFooter 
            channel="starKeyJON" 
            description="tikTokclone" 
            song="silence"
            />
            <VideoSidebar likes={111} shares={333} messages={222}/>
            
        </div>
    );
}

export default Video;
