import { connect } from 'react-redux';
import { fetchRepos, resetRepos } from '../../actions/repos';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isFetching: state.repos.isFetching,
    isBottom: state.repos.isBottom,
    isError: state.repos.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: (input, page) => {
      dispatch(fetchRepos(input, page));
    },
    resetRepos: () => {
      dispatch(resetRepos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
