import React from 'react';
import classNames from 'classnames/bind';
import { Route, Switch } from 'react-router-dom';
import styles from './Page.module.scss';
import routes from '../../router';

const cn = classNames.bind(styles);

const Page = () => (
  <div
    className={cn({
      page: true,
    })}
  >
    <Switch>
      {routes.map((el) => (
        <Route
          key={el.path}
          path={el.path}
          component={el.component}
          exact={el.exact}
        />
      ))}
    </Switch>
  </div>
);

export default Page;
