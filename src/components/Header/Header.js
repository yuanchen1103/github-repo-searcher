import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import styles from './Header.module.scss';
import githubLogo from '../../img/github-logo.svg';

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
    this.handleDebounceChange = debounce((e) => this.handleChange(e), 500);
  }

  inputRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleLoadMoreData);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleLoadMoreDat);
  }

  handleLoadMoreData = () => {
    const { isFetching, isBottom, isError, fetchRepos } = this.props;
    const body = document.body;
    const html = document.documentElement;
    const scrollHeight = body.scrollTop + html.scrollTop + window.innerHeight;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    if (!isFetching && !isBottom && !isError && documentHeight - scrollHeight < 200) {
      const inputValue = this.inputRef.current.value;
      fetchRepos(inputValue);
    }
  };

  handleChange = () => {
    this.props.resetRepos();
    const inputValue = this.inputRef.current.value;
    this.props.fetchRepos(inputValue);
  };

  render() {
    const {isFetching} = this.props;
    return (
      <header className={styles.wrapper}>
        <img src={githubLogo} alt="github-logo" />
        <h1>Search for Github Repositories!</h1>
        <div className={styles.inputGroup}>
          <input
            type="text"
            ref={this.inputRef}
            onChange={this.handleDebounceChange}
          ></input>
          {isFetching && <i className="fas fa-spinner fa-spin"></i>}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isBottom: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  resetRepos: PropTypes.func.isRequired
};

export default Header;
