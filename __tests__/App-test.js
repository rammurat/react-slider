import React from 'react';
import {shallow,render,mount} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import App from '../App.jsx';
import Slider from '../components/Slider.js';

describe("A suite", function() {
  it('should have main container in place', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('should render one <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Slider).length).toEqual(1);
  });

});
