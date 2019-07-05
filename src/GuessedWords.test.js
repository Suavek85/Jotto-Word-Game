import React from "react";
import GuessedWords from "./GuessedWords";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import { findByTestAttr, propTest } from "../test/testUtils";

//TEST UTILS

/*
  const propError = checkPropTypes(
    Congrats.propTypes,
    expectedProps,
    "prop",
    Congrats.name
  );

  expect(propError).toBeUndefined();
  */

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

describe("if there are no words guessed", () => {
  
let wrapper
beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
})

    test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  

  test("renders instructions", () => {
    const  instructions = findByTestAttr(wrapper, "instructions-guessed-words");
    expect(instructions.text().length).not.toBe(0);
  });



});




describe("if there are words guessed", () => {});
