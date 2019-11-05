import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import styles from './Header.module.scss';
import githubLogo from '../../img/github-logo.svg';

const Header = () => {
  const inputRef = useRef(null);
  const handleChange = useCallback((e) => {
    console.log(inputRef.current.value);
  }, []);
  const handleDebounceChange = debounce((e) => handleChange(e), 500);

  return (
    <header className={styles.wrapper}>
      <img src={githubLogo} alt="github-logo" />
      <h1>Search for Github Repositories!</h1>
      <input type="text" ref={inputRef} onChange={handleDebounceChange} />
    </header>
  );
};

Header.propTypes = {};

export default React.memo(Header);
