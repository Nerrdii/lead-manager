import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import leadsReducer from './leadsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  errors: errorsReducer,
  leads: leadsReducer,
  messages: messagesReducer
});
