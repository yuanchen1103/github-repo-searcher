import React from 'react';
import PropTypes from 'prop-types';

import styles from './Repos.module.scss';
import RepoBlock from './RepoBlock';

const Repos = ({ isFetching, isBottom, repoData }) => {
  return (
    <main className={styles.wrapper}>
      <div className="container">
        <div className="row">
          {repoData.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={`${item.id}-${i}`}>
              <RepoBlock
                name={item.full_name}
                lang={item.language}
                time={item.updated_at}
                desc={item.description}
                star={item.stargazers_count}
              />
            </div>
          ))}
        </div>
      </div>
      {isFetching && (
        <div className={styles.spinner}>
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
      {isBottom && <div className={styles.noData}>No Data</div>}
    </main>
  );
};

Repos.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isBottom: PropTypes.bool.isRequired,
  repoData: PropTypes.arrayOf(
    PropTypes.shape({
      full_name: PropTypes.string.isRequired,
      language: PropTypes.string,
      updated_at: PropTypes.string.isRequired,
      description: PropTypes.string,
      stargazers_count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default React.memo(Repos);
