import React from 'react';

//import connect and map the state:
import { connect } from 'react-redux';
const mapStateToProps = ({currentVideo}) => {
  return {
    video: currentVideo,
  };
};
//no dispatch is needed here

var VideoPlayer = ({video}) => (
  !video
    ? <div className="video-player">Please wait...</div>
    : <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
);

export default connect(mapStateToProps)(VideoPlayer);
