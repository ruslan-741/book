import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import ThemeChanger from '../theme_changer/ThemeChanger';

const cn = classNames.bind(styles);

const Header = () => (
  <header
    className={cn({
      header: true,
    })}
  >
    <ThemeChanger />
  </header>
);

export default Header;
