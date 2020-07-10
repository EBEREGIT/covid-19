// Import all actions
import * as actions from "../Action/newsAction";
import { initialState } from "../initialState"

// newsReducer
export default function nigeriaReducer(state = initialState, action) {
  // loop through action type
  switch (action.type) {
    // action = get_NEWS
    case actions.GET_NEWS:
      return { ...state, loading: true };

    // action = get_NEWS_success
    case actions.GET_NEWS_SUCCESS:
      return {
        news: action.payload,
        loading: false,
        hasErrors: false,
      };

    // action = get_NEWS_failure
    case actions.GET_NEWS_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    // action doesn't exist
    default:
      return state;
  }
}
