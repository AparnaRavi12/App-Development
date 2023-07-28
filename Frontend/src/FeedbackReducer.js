import { SUBMIT_FEEDBACK } from './FeedbackActions';

const initialState = {
  feedbackData: null,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return {
        ...state,
        feedbackData: action.payload,
      };
    default:
      return state;
  }
};

export default feedbackReducer;