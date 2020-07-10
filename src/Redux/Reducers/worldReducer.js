// Import all actions
import * as actions from "../Action/newsAction";
export const initialState = {
    world: [],
    loading: false,
    hasErrors: false,
  };
  

// newsReducer
export default function worldReducer(state = initialState, action) {
  // loop through action type
  switch (action.type) {
    // action = get_NEWS
    case actions.GET_NEWS:
      return { ...state, loading: true };

    // action = get_NEWS_success
    case actions.GET_NEWS_SUCCESS:
      return {
        world: action.payload,
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
