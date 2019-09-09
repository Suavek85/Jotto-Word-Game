import React from "react";
//import ReactDOM from 'react-dom';
import App from "./App";
import Congrats from "./Congrats";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

test('renders Congrats component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Congrats).length).toEqual(1);
});

test('renders h1 text', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1').text()).toEqual('Jotto');
});



