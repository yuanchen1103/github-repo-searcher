import { connect } from 'react-redux';
import Repos from './Repos';

const mapStateToProps = (state) => {
  return {
    isFetching: state.repos.isFetching,
    isBottom: state.repos.isBottom,
    repoData: state.repos.data
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);