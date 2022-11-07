import { combineReducers } from 'redux';
import counter from './counter.jsx';
import posts from './posts.jsx';

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
