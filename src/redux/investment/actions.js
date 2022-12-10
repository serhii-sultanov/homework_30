import { DEPOSIT, RESET, WITHDRAW } from "./actionTypes";

export const deposit = (value) => ({
  type: DEPOSIT,
  payload: value,
});

export const withdraw = (value) => ({
  type: WITHDRAW,
  payload: value,
});

export const reset = (value) => ({
  type: RESET,
  payload: value,
});
