import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarLinks from '../sidebar_links/SidebarLinks';

const cn = classNames.bind(styles);

const Sidebar = () => (
  <div className={cn({
    sidebar: true,
  })}
  >
    <SidebarLinks />
  </div>
);

export default Sidebar;
