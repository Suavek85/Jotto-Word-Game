import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";
import { findByTestAttr, propTest } from "../test/testUtils";
import { exportAllDeclaration } from "@babel/types";

//SETUP

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
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
  propTest(Congrats, expectedProps);
  
});
