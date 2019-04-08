import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import leadsReducer from './leadsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  leads: leadsReducer,
  messages: messagesReducer
});
