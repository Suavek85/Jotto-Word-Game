import React from "react";
import Incrementing from "./Incrementing";
import { mount } from "enzyme";

test('shallow wrapper is an instance of class', () => {
  const wrapper = mount(<Incrementing />);
  const instance = wrapper.instance();
  expect(instance).toBeInstanceOf(Incrementing);
});

test("renders counter wrapper", () => {
  const wrapper = mount(<Incrementing />);
  expect(wrapper.find(".counter-wrapper").length).toEqual(1);
});

test("increments counter on increment button click", () => {
  const wrapper = mount(<Incrementing />);
  wrapper
    .find("button")
    .at(0)
    .simulate("click");
  const counterWrapper = wrapper.find(".counter-wrapper");
  expect(counterWrapper.text()).toBe("1");
});

test("decrements counter on decrement button click", () => {
  const wrapper = mount(<Incrementing />);
  wrapper
    .find("button")
    .at(1)
    .simulate("click");
  const counterWrapper = wrapper.find(".counter-wrapper");
  expect(counterWrapper.text()).toBe("-1");
});

test("increments counter when state counter equals 10", () => {
  const wrapper = mount(<Incrementing />);
  wrapper
    .setState({ counter: 10 })
    .find("button")
    .at(0)
    .simulate("click");
  const counterWrapper = wrapper.find(".counter-wrapper");
  expect(counterWrapper.text()).toBe("11");
});
