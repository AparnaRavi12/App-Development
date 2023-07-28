import { combineReducers } from 'redux';
import feedbackReducer from './FeedbackReducer';

const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

export default rootReducer;