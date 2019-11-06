import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  RESET_REPOS
} from '../actions/repos';

const initState = {
  isFetching: false,
  data: [],
  page: 0,
  isBottom: false,
  error: false
};

const repos = (state = initState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        error: false,
        isFetching: true
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, ...action.response.items],
        isFetching: false,
        isBottom: action.response.items.length === 0,
        page: action.response.items.length === 0 ? state.page : state.page + 1
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false
      };
    case RESET_REPOS:
      return initState;
    default:
      return state;
  }
};

export default repos;
