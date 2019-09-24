import React from "react";
import Incrementing from "./Incrementing";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

test('snapshot matches', () => {
  const wrapper = shallow(<Incrementing />);
  expect(wrapper).toMatchSnapshot()
})


describe('wrapper and state', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Incrementing />);
  });
  test('wrapper is an instance of class', () => {
    expect.assertions(2)
    const instance = wrapper.instance();
    expect(instance).toBeInstanceOf(Incrementing);
    expect(instance).toBeTruthy();
  });

  test('initial state is equal to zero', () => {
    expect.assertions(2)
    const instance = wrapper.instance();
    expect(instance.state.counter).toBe(0);
    expect(wrapper.state()).toEqual({
      counter: 0
    })
  });
})


describe('counter component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Incrementing />);
  });
  test("renders counter component", () => {
    const counter = findByTestAttr(wrapper, "component-counter");
    expect(counter.length).toBe(1);
    //finding by class name
    //expect(wrapper.find(".counter-wrapper").length).toEqual(1); 
  });

  test("increments counter component text when the increment method is called", () => {
    const wrappers = shallow(<Incrementing />);
    const instance = wrappers.instance();
    instance.incrementTotalAlternative();
    const counterWrapper = wrappers.find(".counter-wrapper");
    expect(counterWrapper.text()).toBe("1");
  });


  test("increments counter component text on increment button click", () => {
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    const counterWrapper = wrapper.find(".counter-wrapper");
    expect(counterWrapper.text()).toBe("1");
  });
  
  test("decrements counter component text on decrement button click", () => {
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    const counterWrapper = wrapper.find(".counter-wrapper");
    expect(counterWrapper.text()).toBe("-1");
  });
  
  test("increments counter component text when counter state equals 10", () => {
    wrapper
      .setState({ counter: 10 })
      .find("button")
      .at(0)
      .simulate("click");
    const counterWrapper = wrapper.find(".counter-wrapper");
    expect(counterWrapper.text()).toBe("11");
  });
})

