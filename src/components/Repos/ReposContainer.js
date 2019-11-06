import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/repos';
import Repos from './Repos';

const mapStateToProps = (state) => {
  return {
    isFetching: state.repos.isFetching,
    isBottom: state.repos.isBottom,
    repoData: state.repos.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: (input, page) => {
      dispatch(fetchRepos(input, page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
