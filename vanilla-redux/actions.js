import { actionCreator } from './redux.js';
import { DECREASE, INCREASE, RESET } from './action-type.js';

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
