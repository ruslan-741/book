import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PageSection.module.scss';
import { addSection } from '../../store/pagesReducer';

const cn = classNames.bind(styles);

const PageSection = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSection(children));

    return () => {};
  }, [children, dispatch]);

  return (
    <h2
      className={cn({
        section: true,
      })}
    >
      {children}
    </h2>
  );
};

PageSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageSection;
