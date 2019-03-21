import React from 'react';
import VideoListEntry from './VideoListEntry.js';

import { connect } from 'react-redux';
//All we need to do is connect tthe mapState function and provide it the videos for use:
const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

var VideoList = ({videos}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
        />
      ))
    }
  </div>
);

export default connect(mapStateToProps)(VideoList);
