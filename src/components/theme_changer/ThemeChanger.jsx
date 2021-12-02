import React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ThemeChanger.module.scss';
import { themeSelector, setTheme } from '../../store/themeReducer';

const cn = classNames.bind(styles);

const ThemeChanger = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    let newTheme;

    switch (theme) {
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
        newTheme = 'light';
        break;
      default:
        newTheme = 'light';
    }

    dispatch(setTheme(newTheme));
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={cn({
        changer: true,
      })}
    >
      ThemeChanger
    </button>
  );
};

export default ThemeChanger;
