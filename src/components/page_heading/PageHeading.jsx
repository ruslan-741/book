import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './PageHeading.module.scss';

const cn = classNames.bind(styles);

const PageHeading = ({ children }) => (
  <h1
    className={cn({
      heading: true,
    })}
  >
    {children}
  </h1>
);

PageHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageHeading;
