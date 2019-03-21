import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var initialState = {
  video: null, //maybe null?
  videos: [] //maybe []?
};

var configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default configureStore;
