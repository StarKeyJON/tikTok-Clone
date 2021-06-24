import React from 'react';
import Video from './Video';
import './App.css';

function App() {
  return (
    // BEM 'convention'
    <div className="app">
        <div className="app_videos">
            <Video 
              url=""
              channel=""
              description=""
              song=""
              likes={419}
              messages={17}
              shares={3}
            />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    </div>
  );
}

export default App;
