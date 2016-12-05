import React from 'react';
import {shallow,render,mount} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import App from '../App.jsx';
import Slider from '../components/Slider.js';

describe("A suite", function() {
  it('should have app container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Slider).length).toEqual(1);
  });

  it('should have slider', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper.find('#myCarousel').length).toEqual(1);
  });

});
