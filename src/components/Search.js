import React from 'react';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getYouTubeVideos: (e) => dispatch(handleVideoSearch(e.target.value)),
  };
};

const mapStateToProps = () => {
  return {};
};


class Search extends React.Component {
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.props.getYouTubeVideos}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
