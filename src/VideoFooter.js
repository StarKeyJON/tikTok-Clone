import React from "react";
import './VideoFooter.css';
import { MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{ channel }</h3>
                <p>{ description }</p>
                <div className="videoFooter__ticker">
                <MusicNote className="videoFooter__icon"/>
                <Ticker mode="smooth">
                    {({ index })=>(
                    <>
                        <p>{song}</p>
                    </>
                    )}
                </Ticker>
                </div>
            </div>
            <img 
            className="videoFooter__record" 
            src="https://i.redd.it/tvtn7jv69wu61.jpg"
            alt=""
            /> 
        </div>
    );
}

export default VideoFooter;
