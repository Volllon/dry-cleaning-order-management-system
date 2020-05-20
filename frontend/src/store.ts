import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
