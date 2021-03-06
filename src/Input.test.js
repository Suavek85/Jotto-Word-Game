import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";



const setup = (initialState = {}) => {
    const store = storeFactory( initialState )
    const wrapper = shallow(<Input store={store} />).dive().dive()
    //double dive in new versions of redux
    //dive() in shallow allow accessing what's inside a component that's inside a tested component
    ///console.log(wrapper.debug())
    return wrapper
}


describe("render", () => {
  describe("word has not been guessed", () => {
      let wrapper;
      //create a wrapper and initial state
      beforeEach(() => {
          const initialState = {success: false};
          wrapper = setup(initialState)
      })

      //Rendering tests
    test("renders component without error", () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
    });
    test("renders input box", () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1);
    });
    test("renders submit buton", () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
      //create a wrapper and initial state
      beforeEach(() => {
          const initialState = {success: true};
          wrapper = setup(initialState)
      })
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(0);
    });
    test("does not render submit buton", () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(0);
    });
  });
});

describe("update state", () => {});
