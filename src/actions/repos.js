import { CALL_API } from '../middleware/api';
import { PER_PAGE_NUM } from '../constants';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';

export const fetchRepos = (input, page) => (dispatch, getState) => {
  dispatch({
    [CALL_API]: {
      types: [FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE],
      endpoint: `search/repositories?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&per_page=${PER_PAGE_NUM}&q=${input}&page=${page ||
        getState().repos.page + 1}`,
      method: 'get'
    }
  });
};

export const RESET_REPOS = 'RESET_REPOS';

export const resetRepos = () => ({
  type: RESET_REPOS
})
