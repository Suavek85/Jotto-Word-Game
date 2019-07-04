import React from "react";
//import ReactDOM from 'react-dom';
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { exportAllDeclaration } from "@babel/types";
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

test("renders without crashing", () => {

});

test("renders without crashing", () => {

});

test("renders without crashing", () => {
 
});
