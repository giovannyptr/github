import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
  } from './actionTypes';
  import { searchGitHub } from '../services/githubAPI';
  
  export const fetchStart = () => ({ type: FETCH_START });
  export const fetchSuccess = data => ({ type: FETCH_SUCCESS, payload: data });
  export const fetchFailure = error => ({ type: FETCH_FAILURE, payload: error });
  
  export const fetchGitHubData = (query, type, page) => async dispatch => {
    dispatch(fetchStart());
    try {
      const data = await searchGitHub(query, type, page);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error.toString()));
    }
  };
  