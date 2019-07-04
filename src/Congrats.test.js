import React from "react";
//import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { exportAllDeclaration } from "@babel/types";
;

//SETUP

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

//TEST UTILS

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
  }


//TESTS

test("renders correctly", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})

test("renders no text when success prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe("");
});

test("renders non-empty success message when success props is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'message-congrats');
    expect(message.text().length).not.toBe(0);

});

