import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './RepoBlock.module.scss';

const convertThousand = (num) => {
  if (typeof num === 'number') {
    return num >= 1000 ? `${(num / 1000).toFixed(1)} k` : `${num}`;
  }
  return '0';
};

const RepoBlock = ({ name, desc, star, lang, time }) => {
  return (
    <div className={styles.wrapper}>
      <a href={`https://github.com/${name}`} target="blank">
        {name}
      </a>
      <p>{desc || 'No desc'}</p>
      <small>
        <span>
          <i className="fas fa-star"></i> {convertThousand(star)}
        </span>
        {lang && (
          <span>
            <i className="fas fa-code"></i> {lang}
          </span>
        )}
        <span>
          <i className="fas fa-history"></i> {moment(time).format('YYYY-MM-DD')}
        </span>
      </small>
    </div>
  );
};

RepoBlock.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  star: PropTypes.number.isRequired,
  lang: PropTypes.string,
  time: PropTypes.string.isRequired
};

export default React.memo(RepoBlock);
