import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q
    }, (videos) => {
      //now we dispatch the video to the action responsible for them:
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;
