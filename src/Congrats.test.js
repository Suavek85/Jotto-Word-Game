import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import { exportAllDeclaration } from "@babel/types";

//SETUP

const defaultProps = {success: false};

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} />);
};

//TEST UTILS

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};



//TESTS

test("renders correctly", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});


//TESTING PROPS

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty success message when success props is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "message-congrats");
  expect(message.text().length).not.toBe(0);
});


//TESTING PROP TYPES

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };

  const propError = checkPropTypes(
    Congrats.propTypes,
    expectedProps,
    "prop",
    Congrats.name
  );

  expect(propError).toBeUndefined();
  
});
