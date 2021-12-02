import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Sidebar from './components/sidebar/Sidebar';
import Page from './components/page/Page';
import './App.scss';
import Header from './components/header/Header';
import { themeSelector } from './store/themeReducer';

const App = () => {
  const theme = useSelector(themeSelector);

  return (
    <div className={classNames(['app', `app--theme-${theme}`])}>
      <Header />
      <Container>
        <Row>
          <BrowserRouter>
            <Col xxl={{ span: 6, offset: 1 }}>
              <Page />
            </Col>
            <Col xxl={{ span: 3, offset: 2 }}>
              <Sidebar />
            </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
};

export default App;
