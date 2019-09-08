import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns initial test of false when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns true when action with type CORRECT_GUESS is passed", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
