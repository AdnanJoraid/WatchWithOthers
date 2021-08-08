import React from "react";
import '../styles/video.css'
const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Waiting for Host to select a video!
      </p>
    );
  }
  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        allow="autoplay" 
        
        style={{
          pointerEvents: 'none',

        }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&showinfo=0&controls=0`}
      />
    </div>
  );
};

export default Videoplayer;
