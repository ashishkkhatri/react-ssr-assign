import React from 'react';

// we recieve staticContext as props as we are passing it to staticRouter component in renderer.js file.
// In order to render this component in browser we are defaulting the value as empty object as 
// we get staticContext only from staticRouter  
const NotFoundpage = ({ staticContext = {}}) => {
    staticContext.notFound = true;
    return <h1>Oooops, route not found.</h1>
};

export default {
    component: NotFoundpage
};