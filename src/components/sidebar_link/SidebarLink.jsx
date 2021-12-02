import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SidebarLink.module.scss';

const cn = classNames.bind(styles);

const SidebarLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={cn({
      link: true,
    })}
    activeClassName={styles.active}
  >
    {children}
  </NavLink>
);

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default SidebarLink;
