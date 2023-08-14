// Action Types
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// Action Creators
export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});
