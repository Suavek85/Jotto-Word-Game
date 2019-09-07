import { correctGuess, actionTypes } from './';

describe('correct guess', () => {
    test('returns an action with type CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS }) // toBe can only be used for immutable types
    } )
})