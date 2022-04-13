import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './AppFooter.module.scss';

const AppFooter = ({ siteTitle }) => (
  <footer className={styles.appFooter}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  </footer>
);

AppFooter.propTypes = {
  siteTitle: PropTypes.string,
};

AppFooter.defaultProps = {
  siteTitle: ``,
};

export default AppFooter;
