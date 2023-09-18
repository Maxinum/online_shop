// store.ts
import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { AppState } from './types';

export interface RootState {
  app: AppState;
}

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(rootReducer);

export default store;
