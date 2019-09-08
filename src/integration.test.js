import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions/index";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfullGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccesful guess", () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfullGuess,
            letterMatchCount: 3
          }
        ]
      };
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    });
    test("updates state correctly for succesful guess", () => {
        store.dispatch(guessWord(secretWord));
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    });
  });
  //describe("some guessed words", () => {
    //test("updates state correctly for unsuccesful guess", () => {});
    //test("updates state correctly for succesful guess", () => {});
  //});
});
