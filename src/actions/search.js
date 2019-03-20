import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  return () => {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q
    }, (videos) => {
      return {
        type: 'SEARCH',
        videos
      };
    });
  };
};

export default handleVideoSearch;
