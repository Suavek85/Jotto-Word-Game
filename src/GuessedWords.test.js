import React from "react";
import GuessedWords from "./GuessedWords";
import { shallow } from "enzyme";
import { findByTestAttr, propTest } from "../test/testUtils";

/* TESTS */

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3
    }
  ]
};

// SETUP

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

//TESTING PROP TYPES

test("does not throw warning with expected props", () => {
  propTest(GuessedWords, defaultProps);
});

//TESTING COMPONENT

//describe used for frouping tests

//NO WORDS

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions", () => {
    const instructions = findByTestAttr(wrapper, "instructions-guessed-words");
    expect(instructions.text().length).not.toBe(0);
  });
});

// 3 WORDS GUESSED

describe("if there are words guessed", () => {
  let wrapper;
  let guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 3 },
    { guessedWord: "party", letterMatchCount: 3 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  //checks if the component with defined data attribuutes exists as one component
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  //checks if the component sections exists as one section
  test("renders guessed words section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  //check if the number of rows in the table corresponds to number of props array objects that are mapped to rows
  test("correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length); 
  });
});

//45 unit, 1 min
