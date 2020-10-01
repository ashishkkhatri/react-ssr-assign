import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components/macro';

const HeaderContainer = styled.div`
    max-width: 1440px;
    min-width: 100%;
    padding: 10px;
    margin: auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    margin: 0
  }
`;

const App = ({ route }) => {
    const { routes } = route;
    return (
        <HeaderContainer>
            <GlobalStyle />
            <Header />
            {renderRoutes(routes)}
        </HeaderContainer>
    );
};

export default {
    component: App
};

App.propTypes = {
    route: PropTypes.object
};