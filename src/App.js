import React from 'react';
import Video from './Video';
import './App.css';

function App() {
  return (
    // BEM 'convention'
    <div className="app">
        <div className="app_videos">
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    </div>
  );
}

export default App;
