import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import styles from './Header.module.scss';
import githubLogo from '../../img/github-logo.svg';

const Header = ({ isFetching, fetchRepos, resetRepos }) => {
  const inputRef = useRef(null);
  const handleChange = useCallback(
    (e) => {
      resetRepos();
      const inputValue = inputRef.current.value;
      fetchRepos(inputValue);
    },
    [fetchRepos, resetRepos]
  );
  const handleDebounceChange = debounce((e) => handleChange(e), 500);

  return (
    <header className={styles.wrapper}>
      <img src={githubLogo} alt="github-logo" />
      <h1>Search for Github Repositories!</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          ref={inputRef}
          onChange={handleDebounceChange}
        ></input>
        {isFetching && <i className="fas fa-spinner fa-spin"></i>}
      </div>
    </header>
  );
};

Header.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  resetRepos: PropTypes.func.isRequired
};

export default React.memo(Header);
