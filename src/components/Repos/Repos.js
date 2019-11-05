import React from 'react';
import PropTypes from 'prop-types';

import styles from './Repos.module.scss';
import RepoBlock from './RepoBlock';

const Repos = () => {
  return (
    <main className={styles.wrapper}>
      <div className="container">
        <div className="col-md-6 col-lg-4">
          <RepoBlock />
        </div>
      </div>
    </main>
  );
};

Repos.propTypes = {};

export default React.memo(Repos);
