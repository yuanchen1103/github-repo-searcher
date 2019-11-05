import React from 'react';
import PropTypes from 'prop-types';

import styles from './RepoBlock.module.scss';

const RepoBlock = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://google.com" target="blank">
        yuanchen1103/test
      </a>
      <p>
        This is descThis is descThis is descThis is descThis is descThis is
        descThis is descThis is desc
      </p>
      <small>
        <span>
          <i className="fas fa-star"></i> 2.2k
        </span>
        <span>
          <i className="fas fa-code"></i> Javascript
        </span>
        <span>
          <i className="fas fa-history"></i> 2019/02/01
        </span>
      </small>
    </div>
  );
};

RepoBlock.propTypes = {};

export default React.memo(RepoBlock);
