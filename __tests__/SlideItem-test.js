import React from 'react';
import {shallow,render,mount} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import SlideItem from '../components/SlideItem.js';

describe("A suite", function() {
  it('should have img tag for slide', () => {
    const wrapper = shallow(<SlideItem />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should have item container', () => {
    const wrapper = shallow(<SlideItem />);
    expect(wrapper.find('.item').length).toEqual(1);
  });

  it('should have caption placeholder', () => {
    const wrapper = shallow(<SlideItem />);
    expect(wrapper.find('.carousel-caption').length).toEqual(1);
  });

});
