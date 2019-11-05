import { combineReducers } from 'redux';

import repos from './repos';

const allReducers = combineReducers({ repos });

export default allReducers;