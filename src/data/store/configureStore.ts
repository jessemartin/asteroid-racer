import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root';
import { AppState } from '../types';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = (initialState: AppState) =>
  createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;
