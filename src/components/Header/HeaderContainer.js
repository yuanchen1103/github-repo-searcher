import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/repos';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isFetching: state.repos.isFetching
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
)(Header);
