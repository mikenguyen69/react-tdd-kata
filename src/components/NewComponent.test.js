import React from 'react';
import {shallow} from 'enzyme';
import NewComponent from './NewComponent';

describe("NewComponent", () => {
    it("should render new component", () => {
        const wraper = shallow(<NewComponent />);
    });

    it("should render initial layout", () => {
        //when 
        const component = shallow(<NewComponent />);
        //then
        expect(component.getElements()).toMatchSnapshot();
    });

    it("should create an empty in component state", () => {
        //given 
        const component = shallow(<NewComponent />);
        const form = component.find('input');
        //when 
        form.props().onChange({target: {
            name: 'myName',
            value: 'myValue'
        }});
        //then 
        expect(component.state('input')).toBeDefined();
    })

    it("should create an entry in component state with the event value", () => {
        //given 
        const component = shallow(<NewComponent />);
        const form = component.find('input');
        //when
        form.props().onChange({target: {
            name: 'myName',
            value: 'myValue'
        }});
        //then
        expect(component.state('input')).toEqual('myValue');
    });
});