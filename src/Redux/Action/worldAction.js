// news action types
export const GET_NEWS = "GET_NEWS";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

// news action creators that return an action
// retun the get_news type
export const getNews = () => ({
  type: GET_NEWS,
});

// retun the get_news_success type
export const getNewsSuccess = (world) => ({
  type: GET_NEWS_SUCCESS,
  payload: world,
});

// retun the get_news_failure type
export const getNewsFailure = () => ({
  type: GET_NEWS_FAILURE,
});

// World = Combine them all in an asynchronous thunk
export function fetchWorld() {
  return async (dispatch) => {
    // execute the getNews action
    dispatch(getNews());

    try {
      // make API call
      const response = await fetch(
        "https://api.coronatracker.com/v3/stats/worldometer/global"
      );
      const data = await response.json();

      // execute getNewsuccess action
      dispatch(getNewsSuccess(data));
    } catch (error) {
      // execute getNewsFailure action
      dispatch(getNewsFailure());
    }
  };
}
