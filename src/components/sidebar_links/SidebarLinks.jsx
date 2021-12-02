import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import styles from './SidebarLinks.module.scss';
import { pagesSelector } from '../../store/pagesReducer';
import SidebarLink from '../sidebar_link/SidebarLink';

const cn = classNames.bind(styles);

const SidebarLinks = () => {
  const pages = useSelector(pagesSelector);

  return (
    <nav className={cn({
      links: true,
    })}
    >
      {pages.map((el) => <SidebarLink key={el.path} to={el.path}>{el.heading}</SidebarLink>)}
    </nav>
  );
};

export default SidebarLinks;
