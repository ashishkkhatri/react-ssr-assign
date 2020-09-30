import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import PropTypes from 'prop-types';


const App = ({ route }) => {
    const { routes } = route;
    return (
        <div>
            <Header />
            {renderRoutes(routes)}
        </div>
    );
};

export default {
    component: App
};

App.propTypes = {
    route: PropTypes.object,
    // [route.routes]: PropTypes.object
}