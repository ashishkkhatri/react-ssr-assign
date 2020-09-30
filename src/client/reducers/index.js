import { combineReducers } from 'redux';
import launchesReducer from './launchesReducer';

export default combineReducers({
    startYear: () => 2006,
    launches: launchesReducer,
    endYear: () => new Date().getFullYear()
});