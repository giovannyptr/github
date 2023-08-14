import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
  } from '../actions/githubActions';
  
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const githubReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default githubReducer;
  