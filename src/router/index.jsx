import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import Bus from '../pages/bus/Bus';
import Cpu from '../pages/cpu/Cpu';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/hardware" />,
  },
  {
    path: '/hardware',
    component: Home,
  },
  {
    path: '/bus',
    component: Bus,
  },
  {
    path: '/cpu',
    component: Cpu,
  },
];

export default routes;
