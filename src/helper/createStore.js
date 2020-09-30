import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

// export default (req) => {
export default () =>{

    const axiosInstance = axios.create({
        baseURL: 'https://api.spaceXdata.com',
        // headers: {cookie: req.get('Cookie') || ''}
    });

    // second parameter is the initial store value. generally passed as empty object.
    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
}