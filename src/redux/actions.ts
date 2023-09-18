import { INCREMENT, DECREMENT, AppActionTypes } from './types';

export const increment = (): AppActionTypes => ({
  type: INCREMENT,
});

export const decrement = (): AppActionTypes => ({
  type: DECREMENT,
});