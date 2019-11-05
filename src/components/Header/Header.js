import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import githubLogo from '../../img/github-logo.svg';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src={githubLogo} alt="github-logo" />
      <h1>Search for Github Repositories!</h1>
      <input type="text"/>
    </header>
  );
};

Header.propTypes = {};

export default React.memo(Header);
