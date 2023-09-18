// types.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface AppState {
  count: number;
}

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type AppActionTypes = IncrementAction | DecrementAction;
