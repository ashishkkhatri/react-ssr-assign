import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store, context) => {
    const content = renderToNodeStream(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
